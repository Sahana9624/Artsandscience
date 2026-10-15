import React from "react";
import defaultJoinIcon from "../../assets/icons/cc-cta/anti-rag-join.svg";
import { useApply } from "../../Context/ApplyContext";
import "../../Styles/committees/CommitteeCTA.css";

export default function CommitteeCTA({
  title = "Uphold a Safe and Inclusive Campus Together!",
  subtitle = "Reach out for assistance, guidance, or to participate in committee activities.",
  buttonText = "Reach The Cell",
  icon = defaultJoinIcon,
  themeColor = "#D73432",
}) {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };

  return (
    <section
      className="committee-cta"
      style={{
        "--cta-color": themeColor || "#D73432",
      }}
      aria-label="Committee Action Call To Action"
    >
      <div className="committee-cta-left">
        <div className="committee-cta-icon-wrapper">
          <img
            src={icon || defaultJoinIcon}
            alt="Committee Icon"
            className="committee-cta-icon"
            loading="lazy"
          />
        </div>

        <div className="committee-cta-text">
          <h3 className="committee-cta-title">{title}</h3>
          <p className="committee-cta-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="committee-cta-right">
        <button
          type="button"
          className="committee-cta-btn"
          onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
        >
          <span>{buttonText}</span>
          <svg
            className="committee-cta-btn-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
