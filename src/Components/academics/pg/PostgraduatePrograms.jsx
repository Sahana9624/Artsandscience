import React from "react";
import { Link } from "react-router-dom";
import "../../../Styles/academics/ug/UndergraduatePrograms.css";
import "../../../Styles/academics/pg/PostgraduatePrograms.css";
import ArrowIcon from "../../common/ArrowIcon";

export default function PostgraduatePrograms() {
  const pgPrograms = [
    {
      id: "ma-tamil",
      name: "Master of Arts in Tamil [M.A. Tamil]",
      lines: ["Master of Arts in Tamil", "[M.A. Tamil]"],
      duration: "2 years - Tamil Medium",
    },
    {
      id: "ma-english",
      name: "Master of Arts in English [M.A. English]",
      lines: ["Master of Arts in English", "[M.A. English]"],
      duration: "2 years - English Medium",
    },
    {
      id: "mba",
      name: "Master of Business Administration [MBA]",
      lines: ["Master of Business", "Administration [MBA]"],
      duration: "2 years - English Medium",
    },
    {
      id: "mcom",
      name: "Master of Commerce [M.Com]",
      lines: ["Master of Commerce", "[M.Com]"],
      duration: "2 years - English Medium",
    },
    {
      id: "msc-cs",
      name: "Master of Science in Computer Science [M.Sc. CS]",
      lines: ["Master of Science in", "Computer Science [M.Sc. CS]"],
      duration: "2 years - English Medium",
    },
    {
      id: "msc-physics",
      name: "Master of Science in Physics [M.Sc. Physics]",
      lines: ["Master of Science in Physics", "[M.Sc. Physics]"],
      duration: "2 years - English Medium",
    },
    {
      id: "msc-chemistry",
      name: "Master of Science in Chemistry [M.Sc. Chemistry]",
      lines: ["Master of Science in", "Chemistry [M.Sc. Chemistry]"],
      duration: "2 years - English Medium",
    },
    {
      id: "msc-maths",
      name: "Master of Science in Mathematics [M.Sc. Maths]",
      lines: ["Master of Science in", "Mathematics [M.Sc. Maths]"],
      duration: "2 years - English Medium",
    },
    {
      id: "mcom-ca",
      name: "Master of Commerce in Computer Applications [M.Com CA]",
      lines: [
        "Master of Commerce in",
        "Computer Applications",
        "[M.Com CA]",
      ],
      duration: "2 years - English Medium",
      isCentered: true,
    },
  ];

  return (
    <section className="academic-programs-section pg-programs-section" id="pg-programs">
      <div className="academic-programs-container">
        {/* Section Title */}
        <h2 className="academic-programs-title">Our Postgraduate Programs</h2>

        {/* 9 Programs Grid */}
        <div className="academic-programs-grid pg-programs-grid">
          {pgPrograms.map((program) => (
            <div
              key={program.id}
              className={`academic-program-card ${
                program.isCentered ? "pg-item-centered" : ""
              }`}
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
                  to={`/academics/pg/${program.id}`}
                  className="academic-program-btn"
                >
                  <span>View Program</span>
                  <ArrowIcon className="academic-program-btn-arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
