import React, { useRef } from "react";
import clubHeroImg from "../../assets/images/club-com/club-hero.jpg";
import "../../Styles/clubs/ClubHero.css";

export default function ClubHero({
  title = "Clubs & Activities",
  subtitle = "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
  heroImage = clubHeroImg,
}) {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="club-hero"
      style={{ backgroundImage: `url(${heroImage || clubHeroImg})` }}
      aria-label="Clubs & Activities Hero Banner"
    >
      <div className="club-hero-overlay" />
      <div className="club-hero-container">
        <div className="club-hero-content">
          <h1 className="club-hero-title">{title}</h1>
          <p className="club-hero-subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
