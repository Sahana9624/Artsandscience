import React from "react";
import NoDataCard from "../accreditation/NoDataCard";
import noDataImg from "../../assets/images/club-com/no-data.png";
import "../../Styles/committees/CommitteeFaculty.css";

export default function CommitteeFaculty({ faculty = [] }) {
  return (
    <section className="committee-faculty-section" aria-label="Faculty Members">
      <h3 className="committee-section-heading">Faculty Members</h3>

      {!faculty || faculty.length === 0 ? (
        <NoDataCard image={noDataImg} />
      ) : (
        <div className="committee-faculty-grid">
        {faculty.map((member) => {
          const role = (member.role || "").toUpperCase();
          const badgeClass =
            role === "HEAD"
              ? "badge-head"
              : role.replace(/[\s-]/g, "") === "COORDINATOR"
                ? "badge-coordinator"
                : "badge-member";

          return (
            <div key={member.id || member.name} className="committee-faculty-card">
              <div className="committee-faculty-avatar-wrapper">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="committee-faculty-avatar"
                  loading="lazy"
                />
              </div>

              <h4 className="committee-faculty-name">{member.name}</h4>
              <p className="committee-faculty-designation">{member.designation}</p>

              <span
                className={`committee-faculty-badge ${badgeClass}`}
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
