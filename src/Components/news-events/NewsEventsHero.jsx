import React, { useRef } from "react";
import heroImg from "../../assets/images/news/news-hero.png";
import "../../Styles/news-events/NewsEventsHero.css";

export default function NewsEventsHero() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="news-hero-section"
      id="news-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="news-hero-overlay" />
      <div className="news-hero-container">
        <div className="news-hero-content">
          <h1 className="news-hero-title">
            Stay Updated With The Latest News &amp; Events At Mother Terasa College Of Arts &amp; Science
          </h1>
          <p className="news-hero-desc">
            Explore the latest campus news, academic achievements, cultural celebrations, workshops, seminars, conferences, sports events, and important announcements that showcase the vibrant life and accomplishments of our institution.
          </p>
        </div>
      </div>
    </section>
  );
}
