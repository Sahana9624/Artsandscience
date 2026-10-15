import React from "react";
import studentsIcon from "../../assets/icons/achievements/Frame.svg";
import placementIcon from "../../assets/icons/achievements/Frame (1).svg";
import partnersIcon from "../../assets/icons/achievements/Frame (2).svg";
import "../../Styles/home/Achievements.css";
import CountUp from "../common/CountUp";

export default function Achievements() {
  const stats = [
    {
      id: "students",
      icon: studentsIcon,
      value: "10,000+",
      title: "Students Enrolled",
      description: "Across all our institutions and programs",
    },
    {
      id: "placement",
      icon: placementIcon,
      value: "95%",
      title: "Placement Rate",
      description: "Students placed in top companies worldwide",
    },
    {
      id: "partners",
      icon: partnersIcon,
      value: "500+",
      title: "Recruiting Partners",
      description: "Leading companies trust our graduates",
    },
  ];

  return (
    <section className="home-achievements-section" id="achievements">
      <div className="home-achievements-container">
        {/* Section Header */}
        <div className="home-section-header">
          <h2 className="home-section-title">
            Our <span className="highlight-maroon">Achievements</span>
          </h2>
          <p className="home-section-subtitle">
            Numbers that reflect our commitment to excellence and student success
          </p>
        </div>

        {/* 3 Stat Cards Grid */}
        <div className="home-achievements-grid">
          {stats.map((stat) => (
            <div className="achievement-card" key={stat.id}>
              <div className="achievement-icon-wrap">
                <img
                  src={stat.icon}
                  alt={stat.title}
                  className="achievement-icon-img"
                />
              </div>

              <div className="achievement-value">
                <CountUp value={stat.value} duration={2000} />
              </div>
              <h3 className="achievement-title">{stat.title}</h3>
              <p className="achievement-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
