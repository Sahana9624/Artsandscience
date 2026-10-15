import React from "react";
import NoDataCard from "../accreditation/NoDataCard";
import noDataImg from "../../assets/images/club-com/no-data.png";
import "../../Styles/clubs/ClubFaculty.css";

export default function ClubFaculty({ faculty = [] }) {
  return (
    <section className="club-faculty-section" aria-label="Faculty Members">
      <h3 className="club-section-heading">Faculty Members</h3>

      {!faculty || faculty.length === 0 ? (
        <NoDataCard image={noDataImg} />
      ) : (
      <div className="club-faculty-grid">
        {faculty.map((member) => {
          const role = (member.role || "").toUpperCase();
          const badgeClass =
            role === "HEAD"
              ? "badge-head"
              : role.replace(/[\s-]/g, "") === "COORDINATOR"
                ? "badge-coordinator"
                : "badge-member";

          return (
            <div key={member.id || member.name} className="club-faculty-card">
              <div className="club-faculty-avatar-wrapper">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="club-faculty-avatar"
                  loading="lazy"
                />
              </div>

              <h4 className="club-faculty-name">{member.name}</h4>
              <p className="club-faculty-designation">{member.designation}</p>

              <span
                className={`club-faculty-badge ${badgeClass}`}
              >
                {member.role || "MEMBER"}
              </span>
            </div>
          );
        })}
      </div>
      )}
    </section>
  );
}
