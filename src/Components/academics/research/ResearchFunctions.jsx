import React from "react";
import proposalIcon from "../../../assets/icons/research/functions/proposal.svg";
import industryIcon from "../../../assets/icons/research/functions/industry.svg";
import talksIcon from "../../../assets/icons/research/functions/talks.svg";
import journalIcon from "../../../assets/icons/research/functions/journal.svg";
import labIcon from "../../../assets/icons/research/functions/lab.svg";
import patentIcon from "../../../assets/icons/research/functions/patent.svg";
import workshopsIcon from "../../../assets/icons/research/functions/workshops.svg";
import developmentIcon from "../../../assets/icons/research/functions/development.svg";
import conferenceIcon from "../../../assets/icons/research/functions/conference.svg";
import "../../../Styles/academics/research/ResearchFunctions.css";

export default function ResearchFunctions() {
  const functionsList = [
    {
      id: "proposal",
      title: "Research Proposal Development",
      icon: proposalIcon,
    },
    {
      id: "industry",
      title: "Industry Collaboration & MoUs",
      icon: industryIcon,
    },
    {
      id: "talks",
      title: "Expert Talks & Seminars",
      icon: talksIcon,
    },
    {
      id: "journal",
      title: "Journal Subscriptions",
      icon: journalIcon,
    },
    {
      id: "lab",
      title: "Lab Development (UGC Funding)",
      icon: labIcon,
    },
    {
      id: "patent",
      title: "IPR & Patent Support",
      icon: patentIcon,
    },
    {
      id: "workshops",
      title: "Workshops & FDP Programs",
      icon: workshopsIcon,
    },
    {
      id: "development",
      title: "Project Development",
      icon: developmentIcon,
    },
    {
      id: "conference",
      title: "Conference Participation",
      icon: conferenceIcon,
    },
  ];

  return (
    <section className="research-functions-section" id="research-functions">
      <div className="research-functions-box">
        <h2 className="research-functions-title">Functions</h2>
        <div className="research-functions-grid">
          {functionsList.map((item, idx) => (
            <div key={idx} className={`research-function-card card-${item.id}`}>
              <div className="research-function-icon">
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`research-function-img icon-${item.id}`}
                  style={{
                    width: item.width || undefined,
                    height: item.height || undefined,
                  }}
                />
              </div>
              <span className="research-function-name">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
