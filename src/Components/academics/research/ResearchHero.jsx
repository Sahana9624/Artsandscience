import React, { useRef } from "react";
import labImg from "../../../assets/images/academics/research-hero.jpg";
import { useApply } from "../../../Context/ApplyContext";
import "../../../Styles/academics/research/ResearchHero.css";
import ArrowIcon from "../../common/ArrowIcon";

export default function ResearchHero() {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="research-hero-section"
      id="research-hero"
      style={{ backgroundImage: `url(${labImg})` }}
    >
      <div className="research-hero-overlay" />

      <div className="research-hero-container">
        <div className="research-hero-content">
          <h1 className="research-hero-title">
            Academic Research &amp; Development
          </h1>

          <p className="research-hero-desc">
            Building a strong research ecosystem that fosters innovation,
            collaboration and academic excellence.
          </p>

          <div className="research-hero-buttons">
            <button
              type="button"
              className="research-btn-primary"
              onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
            >
              Our Research Ecosystem <ArrowIcon />
            </button>
            <a href="#research-objectives" className="research-btn-outline glass-effect">
              Contact R&amp;D Cell <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
