/**
 * Shared background scroll lock for overlays (apply modal, status card,
 * mobile menu, photo lightbox).
 *
 * Overlays can open and close in the same render (e.g. the apply form closes
 * as the success card opens). If each one saved and restored the page's
 * overflow on its own, the restore order could leave the page stuck at
 * `overflow: hidden`. Counting active locks restores the original styles only
 * when the last overlay closes.
 */
let lockCount = 0;
let saved = null;

export function lockScroll() {
  if (typeof document === "undefined") return;

  if (lockCount === 0) {
    const { body, documentElement: html } = document;
    // Compensate for the scrollbar to avoid layout shift
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    saved = {
      bodyOverflow: body.style.overflow,
      htmlOverflow: html.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
    };

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }
  }
  lockCount++;
}

export function unlockScroll() {
  if (typeof document === "undefined" || lockCount === 0) return;

  lockCount--;
  if (lockCount === 0 && saved) {
    const { body, documentElement: html } = document;
    body.style.overflow = saved.bodyOverflow;
    html.style.overflow = saved.htmlOverflow;
    body.style.paddingRight = saved.bodyPaddingRight;
    saved = null;
  }
}
