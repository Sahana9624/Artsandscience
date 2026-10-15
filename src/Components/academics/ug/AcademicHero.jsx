import React, { useRef } from "react";
import heroImg from "../../../assets/images/academics/hero-academics.jpg";
import { useApply } from "../../../Context/ApplyContext";
import "../../../Styles/academics/ug/AcademicHero.css";
import ArrowIcon from "../../common/ArrowIcon";

export default function AcademicHero() {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="academic-hero-section"
      id="academic-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="academic-hero-overlay" />
      <div className="academic-hero-container">
        <div className="academic-hero-content">
          {/* Badge */}
          <span className="academic-hero-badge">Undergraduate Programs</span>

          {/* Headline */}
          <h1 className="academic-hero-title">
            Build a Strong Foundation for Your Future with Our Undergraduate Programmes
          </h1>

          {/* Subtitle */}
          <p className="academic-hero-desc">
            Explore career-focused undergraduate programmes across Arts, Science, Commerce,
            and Management, designed to provide academic excellence, practical learning, and
            industry-ready skills for lifelong success.
          </p>

          {/* Actions */}
          <div className="academic-hero-buttons">
            <button
              type="button"
              className="academic-btn-primary"
              onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
            >
              Apply Now <ArrowIcon />
            </button>
            <a href="#ug-programs" className="academic-btn-outline glass-effect">
              Explore Programs <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
