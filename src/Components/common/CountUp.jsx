import React, { useEffect, useRef, useState } from "react";

/**
 * Parses numeric stat strings such as "10,000+", "95%", "500+", "04", "13", "760"
 */
function parseStatValue(raw) {
  if (typeof raw === "number") {
    return { target: raw, prefix: "", suffix: "", hasComma: false, padZero: 0 };
  }
  const str = String(raw || "").trim();
  const match = str.match(/^([^\d]*)([\d,]+(?:\.\d+)?)([^\d]*)$/);
  if (!match) {
    return { target: 0, prefix: "", suffix: str, hasComma: false, padZero: 0 };
  }

  const prefix = match[1] || "";
  const numStr = match[2];
  const suffix = match[3] || "";
  const hasComma = numStr.includes(",");
  const cleanNumStr = numStr.replace(/,/g, "");
  const target = parseFloat(cleanNumStr) || 0;
  const isPadded = cleanNumStr.length > 1 && cleanNumStr.startsWith("0");
  const padZero = isPadded ? cleanNumStr.length : 0;

  return { target, prefix, suffix, hasComma, padZero };
}

export default function CountUp({
  value,
  duration = 2000,
  className = "",
  replay = true,
}) {
  const { target, prefix, suffix, hasComma, padZero } = parseStatValue(value);
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const spanRef = useRef(null);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) return;

    if (!window.IntersectionObserver) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else if (replay) {
            // When scrolled out of view, reset so it re-animates on next scroll into view
            setInView(false);
            setCurrent(0);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [replay]);

  useEffect(() => {
    if (!inView) {
      setCurrent(0);
      return;
    }

    let startTime = null;
    let animId = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve (rapid start, gentle deceleration at end)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const nextVal = Math.round(easeProgress * target);

      setCurrent(nextVal);

      if (progress < 1) {
        animId = requestAnimationFrame(animateCount);
      } else {
        setCurrent(target);
      }
    };

    animId = requestAnimationFrame(animateCount);

    return () => {
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, [inView, target, duration]);

  // Format the output number with commas / leading zeros / suffixes
  let formattedNumber = String(current);
  if (padZero > 0) {
    formattedNumber = formattedNumber.padStart(padZero, "0");
  } else if (hasComma) {
    formattedNumber = current.toLocaleString("en-US");
  }

  return (
    <span ref={spanRef} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
