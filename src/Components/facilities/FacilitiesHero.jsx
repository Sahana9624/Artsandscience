import React, { useRef } from "react";
import heroImg from "../../assets/images/facility/facility-hero.png";
import { useApply } from "../../Context/ApplyContext";
import "../../Styles/facilities/FacilitiesHero.css";
import ArrowIcon from "../common/ArrowIcon";

export default function FacilitiesHero() {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };
  const heroRef = useRef(null);

  const handleScrollToGrid = (e) => {
    e.preventDefault();
    const el = document.getElementById("facilities-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="facilities-hero-section"
      id="facilities-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="facilities-hero-overlay" />
      <div className="facilities-hero-container">
        <div className="facilities-hero-content">
          <h1 className="facilities-hero-title">
            World-Class Facilities for Holistic Learning
          </h1>
          <p className="facilities-hero-desc">
            Experience a campus designed to support academic excellence, innovation, and student well-being through modern infrastructure and advanced resources.
          </p>

          <div className="facilities-hero-actions">
            <button
              type="button"
              className="facilities-btn-primary"
              onClick={handleScrollToGrid}
            >
              <span>Explore Facilities</span>
              <ArrowIcon />
            </button>
            <button
              type="button"
              className="facilities-btn-secondary glass-effect glass-effect--clear"
              onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
            >
              Try Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
