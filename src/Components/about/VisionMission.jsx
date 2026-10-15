import React from "react";
import "../../Styles/about/VisionMission.css";

export default function VisionMission() {
  return (
    <section className="about-vm-section" id="vision-mission">
      <div className="about-vm-container">
        {/* Card 1: Our Vision */}
        <div className="vm-card vm-card-vision">
          <div className="vm-card-decorative-circle" />
          <h3 className="vm-card-title">Our Vision</h3>
          <p className="vm-card-desc">
            To enable the students to acquire an integrated personality, endowed
            with Character, Culture, Compassion and Discipline.
          </p>
        </div>

        {/* Card 2: Our Mission */}
        <div className="vm-card vm-card-mission">
          <h3 className="vm-card-title">Our Mission</h3>
          <p className="vm-card-desc">
            To foster Higher Education and the Upliftment of Students Society in
            general and the improvement of their Economic Status and Independence
            in particular.
          </p>
        </div>
      </div>
    </section>
  );
}
