import React, { useRef } from "react";
import { useApply } from "../../../Context/ApplyContext";
import "../../../Styles/academics/course-detail/CourseHero.css";
import ArrowIcon from "../../common/ArrowIcon";

export default function CourseHero({ course }) {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };
  const heroRef = useRef(null);

  const handleDownloadBrochure = () => {
    if (!course) return;

    const brochureText = `MOTHER TERASA ARTS & SCIENCE COLLEGE
(Co-Education | Affiliated to Bharathidasan University)
===========================================================
COURSE INFORMATION: ${course.name}
Duration: ${course.courseInfo?.duration || ""}
Medium of Instruction: ${course.courseInfo?.medium || ""}
Sanctioned Intake: ${course.courseInfo?.intake || ""}
Affiliated By: ${course.courseInfo?.affiliation || ""}
===========================================================

PROGRAM OVERVIEW:
${course.overview?.heading || ""}
${(course.overview?.paragraphs || []).join("\n\n")}

WHY CHOOSE THIS PROGRAM:
${course.whyChoose?.subtitle || ""}

KEY HIGHLIGHTS:
${(course.whyChoose?.cards || [])
  .map((c, i) => `${i + 1}. ${c.title}: ${c.description}`)
  .join("\n")}

CURRICULUM STRUCTURE:
${(course.curriculum || [])
  .map(
    (sem) =>
      `\n[${sem.semester}]\n` + (sem.subjects || []).map((sub) => `  * ${sub}`).join("\n")
  )
  .join("\n")}

CAREER OPPORTUNITIES:
${(course.careerOpportunities || []).join(" | ")}

===========================================================
For Admissions: Contact Mother Terasa Arts & Science College
Website: www.motherterasacollege.com
`;

    const blob = new Blob([brochureText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${course.id}-brochure.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!course) return null;

  return (
    <section ref={heroRef} className="course-hero-section" id="course-hero">
      <div className="course-hero-container">
        {/* Left Content */}
        <div className="course-hero-left">
          <h1 className="course-hero-title">
            {course.titlePrefix}{" "}
            <span className="course-hero-highlight">{course.titleHighlight}</span>
          </h1>
          <p className="course-hero-desc">{course.shortDescription}</p>

          <div className="course-hero-actions">
            <button
              type="button"
              className="course-btn-apply"
              onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
            >
              Apply Now <ArrowIcon />
            </button>
            <button
              type="button"
              className="course-btn-brochure glass-effect"
              onClick={handleDownloadBrochure}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Brochures
            </button>
          </div>
        </div>

        {/* Right Course Info Card */}
        <div className="course-hero-right">
          <div className="course-info-glass-card">
            <h2 className="course-info-card-title">Course Information</h2>
            <div className="course-info-row">
              <span className="course-info-label">Duration</span>
              <span className="course-info-value">{course.courseInfo?.duration}</span>
            </div>
            <div className="course-info-row">
              <span className="course-info-label">Medium</span>
              <span className="course-info-value">{course.courseInfo?.medium}</span>
            </div>
            <div className="course-info-row">
              <span className="course-info-label">Intake</span>
              <span className="course-info-value">{course.courseInfo?.intake}</span>
            </div>
            <div className="course-info-row">
              <span className="course-info-label">Affiliated By</span>
              <span className="course-info-value">{course.courseInfo?.affiliation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
