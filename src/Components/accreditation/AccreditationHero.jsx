import React, { useRef } from "react";
import defaultHeroImg from "../../assets/images/accreditations/accreditation-hero.jpg";
import "../../Styles/accreditation/AccreditationHero.css";

export default function AccreditationHero({
  eyebrow = "NAAC Accreditation & Quality Assurance",
  title = "Internal Quality Assurance Cell (IQAC)",
  subtitle = "Committed to fostering a culture of continuous improvement, academic excellence, and institutional quality through strategic planning, innovation, and best practices.",
  heroImage = defaultHeroImg,
}) {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="accreditation-hero"
      style={{ backgroundImage: `url(${heroImage || defaultHeroImg})` }}
      aria-label="Accreditation Hero Banner"
    >
      <div className="accreditation-hero-overlay" />
      <div className="accreditation-hero-container">
        <div className="accreditation-hero-content">
          {eyebrow && <span className="accreditation-hero-eyebrow">{eyebrow}</span>}
          <h1 className="accreditation-hero-title">{title}</h1>
          <p className="accreditation-hero-subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
