import React from "react";
import DepartmentCard from "./DepartmentCard";
import "../../Styles/departments/DepartmentItems.css";

export default function DepartmentItems({
  titlePrefix = "Science",
  titleHighlight = "Department",
  subtitle = "",
  items = [],
}) {
  return (
    <section className="science-departments-section" id="departments-list">
      <div className="science-dept-container">
        {/* Section Header */}
        <div className="science-dept-header">
          <h2 className="science-dept-title">
            {titlePrefix} <span className="highlight-maroon">{titleHighlight}</span>
          </h2>
          {subtitle && <p className="science-dept-subtitle">{subtitle}</p>}
        </div>

        {/* 2-Column Grid with Left-Aligned Items */}
        <div className="science-dept-grid">
          {items.map((dept, index) => (
            <DepartmentCard
              key={dept.id || index}
              dept={dept}
              isCentered={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
