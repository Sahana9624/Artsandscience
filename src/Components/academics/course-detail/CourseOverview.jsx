import React from "react";
import "../../../Styles/academics/course-detail/CourseOverview.css";

export default function CourseOverview({ course }) {
  if (!course || !course.overview) return null;

  return (
    <section className="course-overview-section" id="course-overview">
      <div className="course-overview-container">
        <span className="course-section-eyebrow">{course.overview.eyebrow}</span>
        <h2 className="course-overview-heading">{course.overview.heading}</h2>
        {(course.overview.paragraphs || []).map((p, index) => (
          <p key={index} className="course-overview-para">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
