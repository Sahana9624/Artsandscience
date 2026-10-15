import React, { useRef, useState } from "react";
import admin1Img from "../../assets/images/about/admin-2.png";
import principalImg from "../../assets/images/about/prinicipal.png";
import admin3Img from "../../assets/images/about/admin-3.png";
import admin2Img from "../../assets/images/about/HOD.png";
import faculty from "./facultyData";
import "../../Styles/about/Administration.css";

const CARDS_PER_ROW = 4;
const REVEAL_STEP_MS = 110;

export default function Administration() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const toggleShowAll = () => {
    if (showAll) {
      // Collapsing removes a long list: bring the section heading back into view
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll((open) => !open);
  };

  const staff = [
    {
      id: 1,
      name: "Dr. T. Poongunran",
      role: "Director",
      image: admin1Img,
    },
    {
      id: 2,
      name: "Dr.S. Vasuki",
      role: "Principal",
      image: principalImg,
    },
    {
      id: 3,
      name: "Dr. J.Samuel caeser Pickens",
      role: "Vice Principal",
      image: admin3Img,
    },
    {
      id: 4,
      name: "S. Dinesh kumar",
      role: "HOD/ Department of Management studies",
      image: admin2Img,
    },
  ];

  return (
    <section className="about-admin-section" id="administration" ref={sectionRef}>
      <div className="about-admin-container">
        {/* Title */}
        <h2 className="about-admin-title">Administration</h2>

        {/* Cards Grid: administration, plus all faculty & staff after "View More" */}
        <div className="about-admin-grid" id="administration-grid">
          {staff.map((person) => (
            <div className="admin-member-card" key={person.id}>
              {/* Photo Frame with Burgundy Accent */}
              <div className="admin-member-photo-frame">
                <img
                  src={person.image}
                  alt={person.name}
                  className="admin-member-photo"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="admin-member-details">
                <h4 className="admin-member-name">{person.name}</h4>
                <p className="admin-member-role">{person.role}</p>
              </div>
            </div>
          ))}

          {showAll &&
            faculty.map((person, index) => (
              <div
                className="admin-member-card"
                key={person.photo}
                // Same flip-up reveal as the cards above, staggered within each row
                data-reveal="flip-up"
                style={{ "--reveal-delay": `${(index % CARDS_PER_ROW) * REVEAL_STEP_MS}ms` }}
              >
                <div className="admin-member-photo-frame">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="admin-member-photo"
                    loading="lazy"
                  />
                </div>

                <div className="admin-member-details">
                  <h4 className="admin-member-name">{person.name}</h4>
                  <p className="admin-member-role">{person.role}</p>
                </div>
              </div>
            ))}
        </div>

        {/* View More / View less toggle */}
        <div className="about-admin-view-more">
          <button
            type="button"
            className="admin-view-more-link"
            aria-expanded={showAll}
            aria-controls="administration-grid"
            onClick={toggleShowAll}
          >
            {showAll ? <>View less &uarr;</> : <>View More &darr;</>}
          </button>
        </div>
      </div>
    </section>
  );
}
