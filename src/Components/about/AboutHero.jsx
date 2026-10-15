import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useApply } from "../../Context/ApplyContext";
import "../../Styles/about/AboutHero.css";

export default function AboutHero() {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="about-hero-section" id="about-hero">
      <div className="about-hero-container">
        {/* Eyebrow */}
        <span className="about-hero-eyebrow">
         Excellence in Arts & Science Education
        </span>

        {/* Title */}
        <h1 className="about-hero-title">
          Mother Teresa College of Arts &amp; Science
        </h1>

        {/* Subtitle */}
        <p className="about-hero-degrees">
          Arts &bull; Commerce &bull; Science &bull; UG &amp; PG Programmes
        </p>

        {/* Description */}
        <p className="about-hero-desc">
          A centre of academic excellence offering diverse programmes in arts, commerce, and science, 
          empowering students with knowledge, skills, and real-world readiness.
        </p>

        {/* Action Buttons */}
        <div className="about-hero-buttons">
          <Link to="/#courses" className="about-hero-btn-primary">
            Explore Courses
          </Link>
          <button
            type="button"
            className="about-hero-btn-outline"
            onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
          >
            Admissions Open
          </button>
        </div>
      </div>
    </section>
  );
}
