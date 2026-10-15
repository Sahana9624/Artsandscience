import React from "react";
import "../../Styles/accreditation/IQACContent.css";

export default function IQACContent({ data }) {
  if (!data) return null;

  const { objective, members, yearReports } = data;

  return (
    <div className="iqac-content-wrapper">
      {/* 1. Objective & Functions Section */}
      {objective && (
        <section className="iqac-objective-section" aria-label="IQAC Objectives">
          <h2 className="iqac-main-heading">{objective.heading || "Objective"}</h2>
          <p className="iqac-objective-intro">{objective.intro}</p>

          <div className="iqac-objective-grid">
            {/* Left Column: Objectives & Benefits */}
            <div className="iqac-objective-left">
              <div className="iqac-card-white">
                <h3 className="iqac-card-title">Objective of IQAC</h3>
                <ul className="iqac-card-list">
                  {objective.objectivesList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="iqac-card-white">
                <h3 className="iqac-card-title">Benefits</h3>
                <ul className="iqac-card-list">
                  {objective.benefitsList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Functions of IQAC (Light Blush Tinted Card) */}
            <div className="iqac-card-pink">
              <h3 className="iqac-card-title">Functions of IQAC</h3>
              <ul className="iqac-card-list">
                {objective.functionsList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 2. Committee Members Section */}
      {members && members.length > 0 && (
        <section
          className="iqac-members-section"
          aria-label="IQAC Committee Members"
        >
          <h2 className="iqac-main-heading">IQAC Committee Members</h2>

          <div className="iqac-members-grid">
            {members.map((member) => {
              const badgeClass =
                member.badgeType === "gold"
                  ? "iqac-badge-gold"
                  : member.badgeType === "orange"
                  ? "iqac-badge-orange"
                  : "iqac-badge-blue";

              return (
                <div key={member.id || member.name} className="iqac-member-card">
                  <div className="iqac-member-avatar-wrapper">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="iqac-member-avatar"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="iqac-member-name">{member.name}</h3>
                  <p className="iqac-member-designation">{member.designation}</p>

                  <span className={`iqac-member-badge ${badgeClass}`}>
                    {member.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. Year Reports Section */}
      {yearReports && yearReports.length > 0 && (
        <section
          className="iqac-reports-section"
          aria-label="IQAC Reports and Documents"
        >
          <div className="iqac-reports-grid">
            {yearReports.map((report, idx) => {
              const isLastAndOdd =
                idx === yearReports.length - 1 && yearReports.length % 2 !== 0;

              return (
                <div
                  key={report.year}
                  className={`iqac-report-card ${
                    isLastAndOdd ? "iqac-report-card-centered" : ""
                  }`}
                >
                  <h3 className="iqac-report-year-title">{report.year}</h3>

                  <div className="iqac-report-items-list">
                    {report.items.map((doc, docIdx) => (
                      <div key={docIdx} className="iqac-report-item-row">
                        <div className="iqac-report-item-left">
                          <span className="iqac-report-item-num">
                            {doc.number}
                          </span>
                          <span className="iqac-report-item-name">
                            {doc.title}
                          </span>
                        </div>

                        <a
                          href={doc.fileUrl || "#"}
                          download
                          className="iqac-download-btn"
                          aria-label={`Download ${doc.title}`}
                          title={`Download ${doc.title}`}
                          onClick={(e) => {
                            if (!doc.fileUrl || doc.fileUrl === "#") {
                              e.preventDefault();
                              alert(`Download for "${doc.title}" will be updated soon.`);
                            }
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
