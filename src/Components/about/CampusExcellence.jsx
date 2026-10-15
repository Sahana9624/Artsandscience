import React from "react";
import excellenceImg from "../../assets/images/about/excellence.jpg";
import "../../Styles/about/CampusExcellence.css";

export default function CampusExcellence() {
  return (
    <section className="about-excellence-section" id="excellence">
      <div className="about-excellence-container">
        {/* Campus Aerial Image */}
        <div className="about-excellence-image-wrap">
          <img
            src={excellenceImg}
            alt="Mother Terasa College of Arts & Science Campus Aerial View"
            className="about-excellence-image"
            loading="eager"
          />
        </div>

        {/* Content Below Image */}
        <div className="about-excellence-content">
          <h2 className="about-excellence-title">
            A Centre for Academic Excellence and Holistic Development
          </h2>

          <p className="about-excellence-desc">
            Mother Terasa Arts &amp; Science College is dedicated to providing quality higher
            education through innovative teaching, experienced faculty, and student-centred learning.
            Offering programmes across Arts, Science, Commerce, Management, and Computer Applications,
            the college nurtures intellectual growth, creativity, and professional excellence.
            <br className="excellence-desc-break" />
            With modern infrastructure, practical learning opportunities, research initiatives, and vibrant
            campus life, we prepare students to become confident professionals, responsible citizens,
            and lifelong learners.
          </p>
        </div>
      </div>
    </section>
  );
}
