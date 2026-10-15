import React from "react";
import NoDataCard from "../accreditation/NoDataCard";
import noDataImg from "../../assets/images/club-com/no-data.png";
import "../../Styles/clubs/ClubStudents.css";

export default function ClubStudents({ students = [] }) {
  return (
    <section className="club-students-section" aria-label="Student Coordinators">
      <h3 className="club-section-heading">Student Coordinators</h3>

      {!students || students.length === 0 ? (
        <NoDataCard image={noDataImg} />
      ) : (
        <div className="club-students-grid">
        {students.map((student) => (
          <div key={student.id || student.name} className="club-student-card">
            <div className="club-student-avatar-wrapper">
              <img
                src={student.avatar}
                alt={student.name}
                className="club-student-avatar"
                loading="lazy"
              />
            </div>

            <div className="club-student-info">
              <h4 className="club-student-name">{student.name}</h4>
              <p className="club-student-designation">{student.designation || "Student"}</p>
              <span className="club-student-badge">
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
