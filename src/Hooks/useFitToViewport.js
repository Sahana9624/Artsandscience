import { useLayoutEffect } from "react";

// Smallest scale before the overlay falls back to scrolling instead
const MIN_SCALE = 0.6;

/*
 * Scales a modal down (CSS `zoom`) so it always fits inside its overlay —
 * on short screens, landscape phones, high OS display scaling or browser zoom —
 * keeping the design's proportions instead of cutting it off or scrolling.
 * At sizes where it already fits, the modal is left exactly as designed.
 */
export default function useFitToViewport(ref, active) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!active || !el) return undefined;

    let frame = 0;
    const fit = () => {
      frame = 0;
      const container = el.parentElement;
      if (!container) return;

      // Measure the natural (unscaled) size
      el.style.zoom = "";
      const box = el.getBoundingClientRect();
      const styles = getComputedStyle(container);
      const availH = container.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
      const availW = container.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);

      const scale = Math.max(MIN_SCALE, Math.min(1, availH / box.height, availW / box.width));
      if (scale < 0.995) el.style.zoom = scale.toFixed(3);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(fit);
    };

    fit();
    // Re-fit when the screen changes or late-loading fonts change the size
    window.addEventListener("resize", schedule);
    document.fonts?.ready.then(schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      el.style.zoom = "";
    };
  }, [ref, active]);
}
