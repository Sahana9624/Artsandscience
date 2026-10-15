import React from "react";
import ecosystemImg from "../../../assets/images/academics/ecosystem.png";
import "../../../Styles/academics/research/ResearchEcosystem.css";

export default function ResearchEcosystem() {
  return (
    <section className="research-ecosystem-section" id="research-ecosystem">
      <div className="research-ecosystem-container">
        <div className="research-ecosystem-image-wrap">
          <img
            src={ecosystemImg}
            alt="Research Ecosystem"
            className="research-ecosystem-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
