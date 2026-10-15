import React from "react";

export default function DepartmentCard({ dept, isCentered = false }) {
  if (!dept) return null;

  return (
    <article
      className={`science-dept-card ${isCentered ? "centered-card" : ""}`}
    >
      <div className="dept-card-image-wrap">
        <img
          src={dept.image}
          alt={dept.alt || dept.name}
          className="dept-card-img"
          loading="lazy"
        />
      </div>
      <div className="dept-card-content">
        <h3 className="dept-card-title">{dept.name}</h3>
        {dept.paragraphs &&
          dept.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="dept-card-paragraph">
              {para}
            </p>
          ))}
      </div>
    </article>
  );
}
