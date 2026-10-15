import React from "react";
import "../../../Styles/academics/course-detail/CourseCurriculum.css";

export default function CourseCurriculum({ course }) {
  if (!course || !course.curriculum || course.curriculum.length === 0) return null;

  return (
    <section className="course-curriculum-section" id="course-curriculum">
      <div className="course-curriculum-wrapper">
        <div className="course-curriculum-card">
          <h2 className="course-curriculum-title">Curriculum Structure</h2>

          <div
            className={`course-curriculum-grid ${
              course.curriculum.length <= 4 ? "curriculum-grid-4" : ""
            }`}
          >
            {course.curriculum.map((sem, sIdx) => (
              <div key={sIdx} className="course-semester-box">
                <h3 className="course-semester-heading glass-effect">{sem.semester}</h3>
                <ul className="course-subject-list">
                  {(sem.subjects || []).map((sub, subIdx) => (
                    <li key={subIdx} className="course-subject-item">
                      <span className="course-subject-dot" />
                      <span className="course-subject-name">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
