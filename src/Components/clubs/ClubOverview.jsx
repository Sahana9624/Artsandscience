import React from "react";
import "../../Styles/clubs/ClubOverview.css";

export default function ClubOverview({ club }) {
  if (!club) return null;

  return (
    <section className="club-overview-card" aria-label={`${club.name} Overview`}>
      <div className="club-overview-info">
        {club.logo && (
          <div className="club-overview-badge">
            <img
              src={club.logo}
              alt={`${club.name} Emblem`}
              className="club-overview-badge-img"
              loading="lazy"
            />
          </div>
        )}
        <h2 className="club-overview-title">{club.name}</h2>
        <p className="club-overview-desc">{club.description}</p>
      </div>

      {club.illustration && (
        <div className="club-overview-media">
          <img
            src={club.illustration}
            alt={`${club.name} Illustration`}
            className="club-overview-illustration"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
}
