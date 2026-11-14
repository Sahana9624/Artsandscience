import React, { useRef } from "react";
import { Link } from "react-router-dom";
import labImg from "../../../assets/images/academics/research-hero.webp";
import "../../../Styles/academics/research/ResearchHero.css";
import ArrowIcon from "../../common/ArrowIcon";

export default function ResearchHero() {
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
            <a href="#research-ecosystem" className="research-btn-primary">
              Our Research Ecosystem <ArrowIcon />
            </a>
            <Link to="/contact" className="research-btn-outline glass-effect">
              Contact R&amp;D Cell <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

