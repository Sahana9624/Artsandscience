import React from "react";
import { Link } from "react-router-dom";
import "../../../Styles/academics/ug/UndergraduatePrograms.css";
import ArrowIcon from "../../common/ArrowIcon";

export default function UndergraduatePrograms() {
  const programs = [
    {
      id: "ba-tamil",
      name: "Bachelor of Arts in Tamil [B.A. Tamil]",
      lines: ["Bachelor of Arts in Tamil", "[B.A. Tamil]"],
      duration: "3 years - Tamil Medium",
    },
    {
      id: "ba-english",
      name: "Bachelor of Arts in English [B.A. English]",
      lines: ["Bachelor of Arts in English", "[B.A. English]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bba",
      name: "Bachelor of Business Administration [BBA]",
      lines: ["Bachelor of Business", "Administration [BBA]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bcom",
      name: "Bachelor of Commerce [B.Com]",
      lines: ["Bachelor of Commerce", "[B.Com]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bcom-ca",
      name: "Bachelor of Commerce in Computer Applications [B.Com CA]",
      lines: [
        "Bachelor of Commerce in",
        "Computer Applications",
        "[B.Com CA]",
      ],
      duration: "3 years - English Medium",
    },
    {
      id: "bcom-pa",
      name: "Bachelor of Commerce in Professional Accounting [B.Com PA]",
      lines: [
        "Bachelor of Commerce in",
        "Professional Accounting",
        "[B.Com PA]",
      ],
      duration: "3 years - English Medium",
    },
    {
      id: "bca",
      name: "Bachelor of Computer Applications [BCA]",
      lines: ["Bachelor of Computer", "Applications [BCA]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bsc-cs",
      name: "Bachelor of Science in Computer Science [B.Sc. CS]",
      lines: ["Bachelor of Science in", "Computer Science [B.Sc. CS]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bsc-physics",
      name: "Bachelor of Science in Physics [B.Sc. Physics]",
      lines: ["Bachelor of Science in Physics", "[B.Sc. Physics]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bsc-chemistry",
      name: "Bachelor of Science in Chemistry [B.Sc. Chemistry]",
      lines: ["Bachelor of Science in", "Chemistry [B.Sc. Chemistry]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bsc-maths",
      name: "Bachelor of Science in Mathematics [B.Sc. Maths]",
      lines: ["Bachelor of Science in", "Mathematics [B.Sc. Maths]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bsc-ds",
      name: "Bachelor of Science in Data Science [B.Sc. DS]",
      lines: ["Bachelor of Science in Data", "Science [B.Sc. DS]"],
      duration: "3 years - English Medium",
    },
    {
      id: "bsc-hm",
      name: "Bachelor of Science in Hotel Management [B.Sc. HM]",
      lines: ["Bachelor of Science in", "Hotel Management [B.Sc. HM]"],
      duration: "3 years - English Medium",
      lastRow: true,
    },
    {
      id: "bsc-aiml",
      name: "Bachelor of Science in Artificial Intelligence & Machine Learning [B.Sc. AI & ML]",
      lines: ["Bachelor of Science in Artificial Intelligence", "& Machine Learning [B.Sc. AI & ML]"],
      duration: "3 years - English Medium",
      lastRow: true,
      isWide: true,
    },
  ];

  const renderCard = (program) => (
    <div
      key={program.id}
      className={`academic-program-card ${program.isWide ? "academic-item-wide" : ""}`}
    >
      <div className="academic-program-body">
        <h3 className="academic-program-name">
          {program.lines ? (
            program.lines.map((line, idx) => (
              <span key={idx} className="program-title-line">
                {line}
              </span>
            ))
          ) : (
            <span className="program-title-line">{program.name}</span>
          )}
        </h3>
        <p className="academic-program-duration">{program.duration}</p>
      </div>

      <div className="academic-program-footer">
        <Link
          to={`/academics/${program.id}`}
          className="academic-program-btn"
        >
          <span>View Program</span>
          <ArrowIcon className="academic-program-btn-arrow" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="academic-programs-section" id="ug-programs">
      <div className="academic-programs-container">
        {/* Section Title */}
        <h2 className="academic-programs-title">Our Undergraduate Programs</h2>

        {/* 14 Programs Grid (last two centered in their own row) */}
        <div className="academic-programs-grid">
          {programs.filter((p) => !p.lastRow).map(renderCard)}
          <div className="academic-programs-last-row">
            {programs.filter((p) => p.lastRow).map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
