import React from "react";
import { facilitiesData } from "./facilitiesData";
import "../../Styles/facilities/FacilitiesGrid.css";

export default function FacilitiesGrid() {
  return (
    <section className="facilities-section" id="facilities-grid">
      <div className="facilities-container">
        <div className="facilities-grid">
          {facilitiesData.map((item) => (
            <div key={item.id} className="facility-card">
              <div className="facility-card-image-wrap">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="facility-card-image"
                  loading="lazy"
                />
              </div>

              <div className="facility-card-body">
                <h2 className="facility-card-title">{item.title}</h2>
                <p className="facility-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
