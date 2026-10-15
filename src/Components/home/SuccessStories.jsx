import React from "react";
import testi1Img from "../../assets/images/home/testi/testi-1.png";
import testi2Img from "../../assets/images/home/testi/testi-2.png";
import testi3Img from "../../assets/images/home/testi/testi-3.png";
import "../../Styles/home/SuccessStories.css";

export default function SuccessStories() {
  const testimonials = [
    {
      id: 1,
      title: "Where My Journey to Success Began",
      quote:
        "My journey at this college has been a valuable learning experience. The knowledge, guidance, and support from the faculty helped me develop my skills and prepare for my career. I am proud to be an alumnus of this institution, and I am happy to be working at Microsoft in Bengaluru. I am grateful to my college for being an important part of my journey.",
      name: "R. Santhosh",
      degree: "M.Sc. CS",
      avatar: testi1Img,
      // Crop from the design (portrait photo framed to head & shoulders on white)
      avatarCrop: { width: "139.22%", height: "146.29%", left: "-29.61%", top: "6.25%" },
      avatarBg: "#FFFFFF",
    },
    {
      id: 2,
      title: "Learning Beyond the Classroom",
      quote:
        "Supportive faculty, practical learning, and modern facilities helped me grow academically and personally. Every experience built my confidence and skills for my career goals.",
      name: "Suganya Ramesh",
      degree: "M.Sc. Maths",
      avatar: testi2Img,
    },
    {
      id: 3,
      title: "A Place That Inspired Growth",
      quote:
        "Studying at Mother Terasa Arts & Science College was rewarding. The supportive environment, skilled faculty, and many opportunities helped me become a confident, career-ready professional.",
      name: "Sanju Ram",
      degree: "B.Com",
      avatar: testi3Img,
    },
  ];

  return (
    <section className="home-testimonials-section" id="testimonials">
      <div className="home-testimonials-container">
        {/* Section Header */}
        <div className="home-section-header">
          <h2 className="home-section-title">
            Student <span className="highlight-maroon">Success Stories</span>
          </h2>
          <p className="home-section-subtitle">
            Meet our alumni who are shaping industries worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="home-testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="testimonial-body">
                <h3 className="testimonial-title">{t.title}</h3>
                <p className="testimonial-quote">{t.quote}</p>
              </div>

              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={t.avatarBg ? { backgroundColor: t.avatarBg } : undefined}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={t.avatarCrop ? "testimonial-avatar-img is-cropped" : "testimonial-avatar-img"}
                    style={t.avatarCrop}
                    loading="lazy"
                  />
                </div>
                <div className="testimonial-author-details">
                  <h4 className="testimonial-name">{t.name}</h4>
                  <span className="testimonial-degree">{t.degree}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
