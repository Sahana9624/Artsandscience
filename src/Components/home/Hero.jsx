import React from "react";
import heroBuildingImg from "../../assets/images/home/home-hero.png";
import { useApply } from "../../Context/ApplyContext";
import "../../Styles/home/Hero.css";

export default function Hero() {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };

  return (
    <section className="home-hero-section" id="hero">
      <div className="home-hero-container">
        {/* Title above the picture */}
        <h1 className="home-hero-title">
          Empowering Future Leaders Through Quality Education,{" "}
          {/* <br className="hero-desktop-br" /> */}
          Innovation, and <span className="highlight-maroon">Holistic Development</span>
        </h1>

        {/* Hero Card with Building Picture, White Overlay & Content */}
        <div className="home-hero-card">
          <img
            src={heroBuildingImg}
            alt="Mother Terasa Arts &amp; Science College Campus"
            className="home-hero-image"
            loading="eager"
          />

          {/* White Gradient Overlay */}
          <div className="home-hero-overlay" />

          {/* Content Overlaid on top of the Picture */}
          <div className="home-hero-content">
            <p className="home-hero-subtitle">
              Mother Terasa Arts &amp; Science College provides a dynamic learning environment
              where academic excellence, practical knowledge, and personal growth come
              together to prepare students for successful careers and lifelong learning.
            </p>

            <div className="home-hero-buttons">
              <button
                type="button"
                className="hero-btn-primary"
                onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
              >
                Apply Now
              </button>
              <a href="#courses" className="hero-btn-outline">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
