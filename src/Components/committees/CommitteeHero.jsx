import React, { useRef } from "react";
import defaultHeroImg from "../../assets/images/committee/committee-hero.png";
import "../../Styles/committees/CommitteeHero.css";

export default function CommitteeHero({
  title = "Committees & Cells",
  subtitle = "Ensuring academic excellence, student welfare, discipline, and inclusive growth.",
  heroImage = defaultHeroImg,
}) {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="committee-hero"
      style={{ backgroundImage: `url(${heroImage || defaultHeroImg})` }}
      aria-label="Committees & Cells Hero Banner"
    >
      <div className="committee-hero-overlay" />
      <div className="committee-hero-container">
        <div className="committee-hero-content">
          <h1 className="committee-hero-title">{title}</h1>
          <p className="committee-hero-subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
