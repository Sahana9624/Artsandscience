import React from "react";
import "../../../Styles/academics/course-detail/CourseWhyChoose.css";

export default function CourseWhyChoose({ course }) {
  if (!course || !course.whyChoose) return null;

  return (
    <section className="course-why-section" id="course-why-choose">
      <div className="course-why-container">
        <h2 className="course-why-title">{course.whyChoose.heading}</h2>
        <p className="course-why-subtitle">{course.whyChoose.subtitle}</p>

        <div className="course-why-grid">
          {(course.whyChoose.cards || []).map((card, idx) => (
            <div key={idx} className="course-why-card">
              <h3 className="course-why-card-title">{card.title}</h3>
              <p className="course-why-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
