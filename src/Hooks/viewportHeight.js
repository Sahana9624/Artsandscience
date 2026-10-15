/**
 * Tracks viewport metrics in CSS variables on <html>:
 *
 * --app-vh    The visible browser viewport height.
 *             `documentElement.clientHeight` is the viewport with the browser
 *             toolbars (address bar / bottom navigation) shown, so page heroes
 *             always fit the visible screen. Unlike `visualViewport.height` or
 *             `innerHeight`, it does not change on pinch-zoom, when the
 *             on-screen keyboard opens, or when the mobile address bar
 *             collapses while scrolling — so heroes never jump mid-scroll.
 *
 * --fs-scale  Font-size multiplier for small screens. It is exactly 1 at and
 *             above the design widths (375px mobile, 1440px desktop), so the
 *             designed sizes are unchanged there, and shrinks smoothly below
 *             them down to FONT_SCALE_MIN.
 */
const MOBILE_MAX = 768; // matches the stylesheets' mobile breakpoint
const MOBILE_DESIGN = 375;
const DESKTOP_DESIGN = 1440;
const FONT_SCALE_MIN = 0.85;

function fontScale(width) {
  const scale =
    width <= MOBILE_MAX
      ? width / MOBILE_DESIGN
      : FONT_SCALE_MIN +
        ((1 - FONT_SCALE_MIN) * (width - (MOBILE_MAX + 1))) /
          (DESKTOP_DESIGN - (MOBILE_MAX + 1));
  return Math.round(Math.min(1, Math.max(FONT_SCALE_MIN, scale)) * 1000) / 1000;
}

export function initViewportHeight() {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  let frame = 0;
  let lastHeight = 0;
  let lastScale = 0;

  const update = () => {
    frame = 0;
    const height = root.clientHeight || window.innerHeight;
    if (height && height !== lastHeight) {
      lastHeight = height;
      root.style.setProperty("--app-vh", `${height}px`);
    }

    const width = root.clientWidth || window.innerWidth;
    const scale = width ? fontScale(width) : 1;
    if (scale !== lastScale) {
      lastScale = scale;
      root.style.setProperty("--fs-scale", String(scale));
    }
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  update();
  window.addEventListener("resize", schedule);
  window.addEventListener("orientationchange", schedule);
  window.addEventListener("pageshow", schedule);
}
