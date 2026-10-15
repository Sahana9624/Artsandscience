import React from "react";
import "../../../Styles/academics/ug/AcademicStats.css";
import CountUp from "../../common/CountUp";

export default function PostgraduateStats() {
  const stats = [
    { value: "09", label: "Postgraduate Programs" },
    { value: "04", label: "Academic Streams" },
    { value: "360", label: "Total Students Intake" },
    { value: "24+", label: "Years of Academic Excellence" },
  ];

  return (
    <section className="academic-stats-section">
      <div className="academic-stats-container">
        <div className="academic-stats-bar">
          {stats.map((item, index) => (
            <div className="academic-stat-col" key={index}>
              <span className="academic-stat-number">
                <CountUp value={item.value} duration={2000} />
              </span>
              <span className="academic-stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
