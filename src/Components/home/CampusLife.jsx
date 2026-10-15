import React from "react";
import libraryImg from "../../assets/images/campus/library.png";
import labImg from "../../assets/images/campus/labs.png";
import sportsImg from "../../assets/images/campus/sports.jpg";
import hostelImg from "../../assets/images/campus/hostel.png";
import auditoriumImg from "../../assets/images/campus/auditorium.jpg";
import cafeteriaImg from "../../assets/images/campus/cafeteria.jpg";
import "../../Styles/home/CampusLife.css";

export default function CampusLife() {
  const facilities = [
    { title: "Library", image: libraryImg },
    { title: "Labs", image: labImg },
    { title: "Sports", image: sportsImg },
    { title: "Hostel", image: hostelImg },
    { title: "Auditorium", image: auditoriumImg },
    { title: "Cafeteria", image: cafeteriaImg },
  ];

  return (
    <section className="home-campus-section" id="campus">
      <span id="facilities" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="gallery" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="clubs" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="committees" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="anti-ragging" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="grievance" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="placement" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="edc" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="disciplinary" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="students-grievance" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="green-campus" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="career-guidance" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="anti-drug" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="iic" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <span id="women-harassment" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />
      <div className="home-campus-container">
        {/* Section Header */}
        <div className="home-section-header">
          <h2 className="home-section-title">
            Campus <span className="highlight-maroon">Life</span>
          </h2>
          <p className="home-section-subtitle">
            Experience world-class facilities and a vibrant campus environment
          </p>
        </div>

        {/* 6 Facilities Grid */}
        <div className="home-campus-grid">
          {facilities.map((facility, index) => (
            <div className="campus-item-card" key={index}>
              <img
                src={facility.image}
                alt={facility.title}
                className="campus-item-image"
                loading="lazy"
              />
              <div className="campus-item-gradient-overlay" />
              <div className="campus-item-content">
                <h3 className="campus-item-name">{facility.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
