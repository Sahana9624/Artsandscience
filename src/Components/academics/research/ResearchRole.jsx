import React from "react";
import "../../../Styles/academics/research/ResearchRole.css";

export default function ResearchRole() {
  const roles = [
    "Enhance research ecosystem",
    "Promote academic research",
    "Maintain ethical standards",
    "Support funding applications",
  ];

  return (
    <section className="research-roles-section" id="research-roles">
      <div className="research-roles-box">
        <h2 className="research-roles-title">Role of R&amp;D cell</h2>
        <div className="research-roles-row">
          {roles.map((role, idx) => (
            <div key={idx} className="research-role-card">
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
