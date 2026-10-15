import React from "react";
import createIcon from "../../../assets/icons/research/objective/create.svg";
import researchIcon from "../../../assets/icons/research/objective/research.svg";
import ethicsIcon from "../../../assets/icons/research/objective/ethics.svg";
import publicationsIcon from "../../../assets/icons/research/objective/publications.svg";
import conferenceIcon from "../../../assets/icons/research/objective/conference.svg";
import higherStudiesIcon from "../../../assets/icons/research/objective/higher-studies.svg";
import industryIcon from "../../../assets/icons/research/objective/industry.svg";
import resourceIcon from "../../../assets/icons/research/objective/resource.svg";
import projectIcon from "../../../assets/icons/research/objective/project.svg";
import collaborationIcon from "../../../assets/icons/research/objective/collaboration.svg";
import "../../../Styles/academics/research/ResearchObjectives.css";

export default function ResearchObjectives() {
  const objectives = [
    {
      id: "create",
      title: "Create & Promote Research Culture",
      desc: "Encouraging innovation among faculty and students",
      icon: createIcon,
    },
    {
      id: "research",
      title: "Research Projects",
      desc: "Undertaking funded and development projects",
      icon: researchIcon,
    },
    {
      id: "ethics",
      title: "Ethics & Quality",
      desc: "Ensuring integrity in research",
      icon: ethicsIcon,
    },
    {
      id: "publications",
      title: "Publications",
      desc: "Encouraging journals & research papers",
      icon: publicationsIcon,
    },
    {
      id: "conference",
      title: "Workshops & Conferences",
      desc: "Participation in academic events",
      icon: conferenceIcon,
    },
    {
      id: "higher-studies",
      title: "Higher Studies",
      desc: "Motivating Ph.D & M.Phil",
      icon: higherStudiesIcon,
    },
    {
      id: "industry",
      title: "Industry Collaboration",
      desc: "Linking with organisations",
      icon: industryIcon,
    },
    {
      id: "resource",
      title: "Research Resources",
      desc: "Providing journals & e-resources",
      icon: resourceIcon,
    },
    {
      id: "project",
      title: "Student Projects",
      desc: "Encouraging mini & major projects",
      icon: projectIcon,
    },
    {
      id: "collaboration",
      title: "Collaboration & Review",
      desc: "Strengthening research progress",
      icon: collaborationIcon,
    },
  ];

  return (
    <section className="research-objectives-section" id="research-objectives">
      <div className="research-objectives-container">
        <h2 className="research-section-title">Objectives</h2>
        <div className="research-objectives-grid">
          {objectives.map((obj, idx) => (
            <div key={idx} className={`research-objective-card card-${obj.id}`}>
              <div className="research-objective-icon-wrap">
                <img
                  src={obj.icon}
                  alt={obj.title}
                  className={`research-objective-img icon-${obj.id}`}
                  style={
                    obj.width || obj.height
                      ? { width: obj.width, height: obj.height }
                      : undefined
                  }
                />
              </div>
              <h3 className="research-objective-title">{obj.title}</h3>
              <p className="research-objective-desc">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
