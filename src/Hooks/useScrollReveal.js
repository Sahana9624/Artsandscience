import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * Scroll-reveal animations applied site-wide by class name, so page components
 * stay untouched. Elements get `data-reveal="<effect>"` and are animated once
 * when they enter the viewport (see Styles/ScrollReveal.css).
 *
 * single: animate the matched element itself.
 * group:  animate each direct child of the matched element with a stagger.
 */
const REVEAL_RULES = [
  // ── Hero sections (play on load) ──
  { selector: ".home-hero-title", effect: "fade-down" },
  { selector: ".home-hero-card", effect: "zoom-in", delay: 150 },
  { selector: ".home-hero-subtitle, .home-hero-buttons", effect: "fade-up", delay: 450 },
  {
    selector: [
      ".about-hero-container",
      ".academic-hero-content",
      ".accreditation-hero-content",
      ".club-hero-content",
      ".committee-hero-content",
      ".contact-hero-left",
      ".course-hero-left",
      ".departments-hero-content",
      ".facilities-hero-content",
      ".gallery-hero-content",
      ".news-hero-content",
      ".research-hero-content",
      ".legal-hero-content",
    ].join(", "),
    effect: "fade-up",
    group: true,
    step: 120,
  },
  { selector: ".contact-glass-card, .course-hero-right", effect: "fade-left", delay: 300 },

  // ── Section headings ──
  {
    selector: [
      ".home-section-header",
      ".about-admin-title",
      ".about-leadership-main-title",
      ".academic-programs-title",
      ".club-section-heading",
      ".committee-section-heading",
      ".course-careers-title",
      ".course-curriculum-title",
      ".course-overview-heading",
      ".course-why-title",
      ".course-why-subtitle",
      ".course-section-eyebrow",
      ".gallery-detail-header",
      ".research-functions-title",
      ".research-responsibilities-title",
      ".research-roles-title",
      ".research-section-title",
      ".science-dept-header",
      ".legal-overview-title",
      ".legal-section-title",
      ".iqac-main-heading",
      ".iqac-report-year-title",
      ".contact-map-title",
    ].join(", "),
    effect: "fade-up",
  },

  // ── Home ──
  { selector: ".home-welcome-description", effect: "fade-up" },
  { selector: ".home-courses-grid", effect: "fade-up", group: true, step: 150 },
  { selector: ".home-achievements-grid", effect: "zoom-in", group: true, step: 120 },
  { selector: ".home-campus-grid", effect: "zoom-in", group: true, step: 90 },
  { selector: ".home-testimonials-grid", effect: "tilt-up", group: true, step: 130 },
  { selector: ".home-faq-list", effect: "fade-up", group: true, step: 80 },

  // ── Shared CTA banner ──
  { selector: ".common-cta-left", effect: "fade-right" },
  { selector: ".common-cta-collage-grid", effect: "zoom-in", group: true, step: 110 },

  // ── About ──
  { selector: ".about-excellence-image-wrap", effect: "zoom-in" },
  { selector: ".about-excellence-content", effect: "fade-up", group: true, step: 120 },
  { selector: ".vm-card-vision", effect: "fade-right" },
  { selector: ".vm-card-mission", effect: "fade-left" },
  { selector: ".leadership-card.image-right", effect: "fade-right" },
  { selector: ".leadership-card.image-left", effect: "fade-left" },
  { selector: ".about-admin-grid", effect: "flip-up", group: true, step: 110 },

  // ── Academics / courses / research ──
  {
    selector: ".academic-stats-container, .research-stats-container",
    effect: "zoom-in",
    group: true,
    step: 90,
  },
  { selector: ".academic-programs-grid, .pg-programs-grid", effect: "fade-up", group: true, step: 70 },
  { selector: ".course-overview-para", effect: "fade-up" },
  { selector: ".course-why-grid", effect: "flip-up", group: true, step: 90 },
  { selector: ".course-curriculum-card", effect: "fade-up" },
  { selector: ".course-careers-tags-container", effect: "zoom-in", group: true, step: 50 },
  { selector: ".research-objectives-grid", effect: "fade-up", group: true, step: 70 },
  { selector: ".research-functions-grid", effect: "zoom-in", group: true, step: 60 },
  { selector: ".research-pills-row", effect: "fade-left", group: true, step: 90 },
  { selector: ".research-role-card", effect: "fade-up" },
  { selector: ".research-ecosystem-image-wrap", effect: "zoom-in" },

  // ── Departments / facilities ──
  { selector: ".science-dept-grid > :nth-child(odd)", effect: "fade-right" },
  { selector: ".science-dept-grid > :nth-child(even)", effect: "fade-left" },
  { selector: ".facilities-grid", effect: "fade-up", group: true, step: 90 },

  // ── News & gallery ──
  { selector: ".news-event-poster-wrap", effect: "fade-right" },
  { selector: ".news-event-body", effect: "fade-left", delay: 120 },
  { selector: ".gallery-albums-grid", effect: "zoom-in", group: true, step: 70 },
  { selector: ".gallery-photos-grid", effect: "zoom-in", group: true, step: 60 },

  // ── Clubs & committees ──
  { selector: ".club-overview-media, .committee-overview-media", effect: "fade-right" },
  { selector: ".club-overview-info, .committee-overview-info", effect: "fade-left", delay: 120 },
  { selector: ".club-faculty-grid, .committee-faculty-grid", effect: "flip-up", group: true, step: 90 },
  { selector: ".club-students-grid, .committee-students-grid", effect: "fade-up", group: true, step: 120 },
  { selector: ".club-join-cta-left, .committee-cta-left", effect: "fade-right" },
  { selector: ".club-join-cta-right, .committee-cta-right", effect: "fade-left" },

  // ── Accreditation ──
  { selector: ".iqac-objective-grid", effect: "fade-up", group: true, step: 120 },
  { selector: ".iqac-members-grid", effect: "flip-up", group: true, step: 90 },
  { selector: ".iqac-reports-grid", effect: "fade-up", group: true, step: 90 },
  { selector: ".no-data-card", effect: "zoom-in" },

  // ── Contact / legal ──
  { selector: ".contact-form-card", effect: "fade-right" },
  { selector: ".contact-map-card", effect: "fade-left" },
  { selector: ".legal-overview, .legal-section-content", effect: "fade-up" },

  // ── Footer ──
  { selector: ".home-footer-main", effect: "fade-up", group: true, step: 120 },
];

const MAX_STAGGER_MS = 600;

function markElements(observer) {
  REVEAL_RULES.forEach(({ selector, effect, group, step = 80, delay = 0 }) => {
    document.querySelectorAll(selector).forEach((el) => {
      const targets = group ? Array.from(el.children) : [el];
      targets.forEach((target, index) => {
        if (target.hasAttribute("data-reveal")) {
          // Re-observe anything still hidden from a previous observer (e.g. same page, new route param)
          if (!target.classList.contains("is-revealed")) observer.observe(target);
          return;
        }
        target.setAttribute("data-reveal", effect);
        const stagger = group ? Math.min(index * step, MAX_STAGGER_MS) : 0;
        target.style.setProperty("--reveal-delay", `${delay + stagger}ms`);
        observer.observe(target);
      });
    });
  });
}

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    markElements(observer);

    // Pick up content rendered after navigation (tab switches, album changes, etc.)
    let frame = 0;
    const mutationObserver = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => markElements(observer));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);
}
