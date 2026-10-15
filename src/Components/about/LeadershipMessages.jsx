import React, { useEffect, useRef } from "react";
import founderImg from "../../assets/images/about/founder.png";
import chairmanImg from "../../assets/images/about/chairman.png";
import principalImg from "../../assets/images/about/prinicipal.png";
import "../../Styles/about/LeadershipMessages.css";

export default function LeadershipMessages() {
  const listRef = useRef(null);

  // Expose each card's height to CSS so cards taller than the screen pin by
  // their bottom edge (fully readable) before the next card stacks over them
  useEffect(() => {
    const cards = listRef.current?.querySelectorAll(".leadership-card");
    if (!cards?.length || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const card = entry.target;
        card.style.setProperty("--leadership-card-h", `${card.offsetHeight}px`);
      }
    });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const leaders = [
    {
      id: "founder",
      title: "Founder’s Message",
      name: "Shri. R. Chinnathambi",
      roleTitle: "Founder",
      roleOrg: ", Mother Teresa Educational & Charitable Trust",
      designation: "Founder, Mother Teresa Educational & Charitable Trust",
      paragraphs: [
        "Our Founder, is widely respected for his contributions to the field of education. With a strong vision to uplift society through knowledge, he has played a key role in establishing and developing institutions that serve students across diverse disciplines.",
        "Driven by a commitment to promote quality education in rural areas, he continues to inspire the institution’s mission of providing accessible, meaningful, and value-based education.",
      ],
      image: founderImg,
      imageAlt: "Shri. R. Chinnathambi - Founder",
      imagePosition: "right",
    },
    {
      id: "chairman",
      title: "Chairman’s Message",
      name: "Shri. R. C. Uthayakumar, B.A.",
      roleTitle: "Chairman",
      roleOrg: ", Mother Teresa Educational & Charitable Trust",
      designation: "Chairman, Mother Teresa Educational & Charitable Trust",
      paragraphs: [
        "Our Chairman is a visionary leader, philanthropist, and entrepreneur dedicated to providing value-based education, particularly for students from rural and underserved communities. Through his leadership, the institution has grown into a multi-disciplinary educational group focused on academic excellence and holistic development.",
        "He emphasises bridging theory and practice to equip students with practical skills and real-world knowledge. With a strong commitment to growth, innovation, and social responsibility, he continues to inspire and guide the institution towards a brighter future.",
      ],
      image: chairmanImg,
      imageAlt: "Shri. R. C. Uthayakumar - Chairman",
      imagePosition: "left",
    },
    {
      id: "principal",
      title: "Principal’s Message",
      name: "Dr.S. Vasuki",
      roleTitle: "Principal",
      roleOrg: ", Mother Teresa College of Arts & Science",
      designation: "Principal, Mother Teresa College of Arts & Science",
      paragraphs: [
        "It is my privilege to welcome you to Mother Teresa College of Arts and Science, Illuppur. Our institution is committed to academic excellence and the holistic development of students.",
        "We focus on nurturing critical thinking, practical skills, and strong values through a balanced approach that combines academic learning with industry exposure and skill-based initiatives. With continuous improvements in teaching, infrastructure, and student support, we strive to create a dynamic and learner-friendly environment.",
        "We remain dedicated to shaping responsible individuals and future leaders who contribute positively to society.",
      ],
      image: principalImg,
      imageAlt: "Dr.S. Vasuki - Principal",
      imagePosition: "right",
    },
  ];

  return (
    <section className="about-leadership-section" id="leadership">
      <div className="about-leadership-container">
        {/* Section Title */}
        <h2 className="about-leadership-main-title">Leadership Messages</h2>

        {/* Leaders Message Cards */}
        <div className="leadership-cards-list" ref={listRef}>
          {leaders.map((leader, index) => {
            const isImageLeft = leader.imagePosition === "left";
            return (
              <div
                className={`leadership-card ${isImageLeft ? "image-left" : "image-right"}`}
                key={leader.id}
                style={{ "--stack-index": index }}
              >
                {/* Content Side */}
                <div className="leadership-card-content">
                  <h3 className="leadership-card-title">{leader.title}</h3>
                  <div className="leadership-card-author">
                    <span className="leadership-author-name">{leader.name}</span>
                    <span className="leadership-author-role">
                      <span className="leadership-role-keyword">{leader.roleTitle}</span>
                      {leader.roleOrg}
                    </span>
                  </div>

                  <div className="leadership-card-body">
                    {leader.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* Photo Side */}
                <div className="leadership-card-image-wrap">
                  <img
                    src={leader.image}
                    alt={leader.imageAlt}
                    className="leadership-card-image"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
