import React from "react";
import "../../../Styles/academics/course-detail/CourseCareers.css";

export default function CourseCareers({ course }) {
  if (!course || !course.careerOpportunities || course.careerOpportunities.length === 0) return null;

  return (
    <section className="course-careers-section" id="course-careers">
      <div className="course-careers-container">
        <h2 className="course-careers-title">Career Opportunities</h2>

        <div className="course-careers-tags-container">
          {course.careerOpportunities.map((career, cIdx) => (
            <span key={cIdx} className="course-career-badge">
              {career}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
