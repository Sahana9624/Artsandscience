import React from "react";
import "../../Styles/committees/CommitteeOverview.css";

export default function CommitteeOverview({ committee }) {
  if (!committee) return null;

  return (
    <section
      className="committee-overview-card"
      aria-label={`${committee.name} Overview`}
    >
      <div className="committee-overview-info">
        {committee.logo && (
          <div className="committee-overview-badge">
            <img
              src={committee.logo}
              alt={`${committee.name} Emblem`}
              className="committee-overview-badge-img"
              loading="lazy"
            />
          </div>
        )}
        <h2 className="committee-overview-title">{committee.name}</h2>
        <p className="committee-overview-desc">{committee.description}</p>
      </div>

      {committee.illustration && (
        <div className="committee-overview-media">
          <img
            src={committee.illustration}
            alt={`${committee.name} Illustration`}
            className="committee-overview-illustration"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
}
