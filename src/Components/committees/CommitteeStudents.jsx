import React from "react";
import NoDataCard from "../accreditation/NoDataCard";
import noDataImg from "../../assets/images/club-com/no-data.png";
import "../../Styles/committees/CommitteeStudents.css";

export default function CommitteeStudents({ students = [] }) {
  return (
    <section
      className="committee-students-section"
      aria-label="Student Coordinators"
    >
      <h3 className="committee-section-heading">Student Coordinators</h3>

      {!students || students.length === 0 ? (
        <NoDataCard image={noDataImg} />
      ) : (
        <div className="committee-students-grid">
          {students.map((student) => (
            <div key={student.id || student.name} className="committee-student-card">
              <div className="committee-student-avatar-wrapper">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="committee-student-avatar"
                  loading="lazy"
                />
              </div>

              <div className="committee-student-info">
                <h4 className="committee-student-name">{student.name}</h4>
                <p className="committee-student-designation">
                  {student.designation || "Student"}
                </p>
                <span className="committee-student-badge">
                  {student.badge || "Student Coordinators"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
