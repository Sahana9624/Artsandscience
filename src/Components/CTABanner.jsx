import React from "react";
import { Link } from "react-router-dom";
import cta1Img from "../assets/images/gallery/generative-ai/05.png";
import cta2Img from "../assets/images/gallery/pongal-2026/02.png";
import cta3Img from "../assets/images/gallery/nanneri/10.png";
import cta4Img from "../assets/images/gallery/sports/01.png";
import contactIcon from "../assets/contact.svg";
import { useApply } from "../Context/ApplyContext";
import "../Styles/CTABanner.css";
import ArrowIcon from "./common/ArrowIcon";

export default function CTABanner({
  title = "Take the First Step Towards a Successful Future with Quality Education, Innovation, and Endless Opportunities",
  description = "Join Mother Terasa Arts & Science College and become part of a dynamic academic community that nurtures knowledge, creativity, leadership, and lifelong learning while preparing you for higher education, rewarding careers, and meaningful contributions to society.",
  applyText = "Apply Now",
  contactText = "Contact Us",
  contactLink = "/contact",
  images = [cta1Img, cta2Img, cta3Img, cta4Img],
  className = "",
}) {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };

  return (
    <section className={`common-cta-section ${className}`} id="cta">
      <div className="common-cta-container">
        {/* Left Column: Headings & Action Buttons */}
        <div className="common-cta-left">
          <h2 className="common-cta-title">{title}</h2>
          <p className="common-cta-desc">{description}</p>

          <div className="common-cta-actions">
            <button
              type="button"
              className="common-cta-btn-apply"
              onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
            >
              {applyText} <ArrowIcon />
            </button>
            <Link to={contactLink} className="common-cta-btn-contact glass-effect">
              <img src={contactIcon} alt="phone" className="common-cta-phone-icon" />
              {contactText}
            </Link>
          </div>
        </div>

        {/* Right Column: 2x2 Photo Collage */}
        <div className="common-cta-right">
          <div className="common-cta-collage-grid">
            {images.slice(0, 4).map((imgSrc, index) => (
              <div
                className={`common-cta-collage-item common-cta-collage-item-${index + 1}`}
                key={index}
              >
                <img
                  src={imgSrc}
                  alt={`College event ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
