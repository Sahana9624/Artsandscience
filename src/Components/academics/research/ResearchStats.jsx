import React from "react";
import "../../../Styles/academics/research/ResearchStats.css";
import CountUp from "../../common/CountUp";

export default function ResearchStats() {
  const stats = [
    { value: "50+", label: "Research papers published" },
    { value: "10+", label: "Conferences / workshops" },
    { value: "100+", label: "Student projects completed" },
    { value: "15+", label: "Research collaborations & MoUs" },
    { value: "5+", label: "Patents filed" },
  ];

  return (
    <section className="research-stats-section">
      <div className="research-stats-container">
        <div className="research-stats-bar">
          {stats.map((item, index) => (
            <div className="research-stat-col" key={index}>
              <span className="research-stat-number">
                <CountUp value={item.value} duration={2000} />
              </span>
              <span className="research-stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
