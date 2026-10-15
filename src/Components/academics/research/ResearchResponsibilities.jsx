import React from "react";
import "../../../Styles/academics/research/ResearchResponsibilities.css";

export default function ResearchResponsibilities() {
  const responsibilities = [
    {
      title: (
        <>
          Guide research<br />methodology
        </>
      ),
    },
    {
      title: (
        <>
          Support project<br />development
        </>
      ),
    },
    {
      title: "Maintain research ethics",
    },
    {
      title: "Promote IPR awareness",
    },
  ];

  return (
    <section className="research-responsibilities-section" id="research-responsibilities">
      <div className="research-responsibilities-container">
        <h2 className="research-responsibilities-title">Responsibilities of R&amp;D cell</h2>
        <div className="research-pills-row">
          {responsibilities.map((item, idx) => (
            <div key={idx} className="research-pill-card">
              <span className="research-pill-text">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
