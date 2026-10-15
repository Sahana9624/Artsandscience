import React from "react";
import defaultJoinIcon from "../../assets/icons/cc-cta/red-club-2.svg";
import { useApply } from "../../Context/ApplyContext";
import "../../Styles/clubs/ClubJoinCTA.css";

export default function ClubJoinCTA({
  title = "Be a part of a club and make a difference!",
  subtitle = "Join hands with like minded people and contribute to a better tomorrow.",
  buttonText = "Join This Club",
  icon = defaultJoinIcon,
  themeColor = "#E02327",
}) {
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };

  return (
    <section
      className="club-join-cta"
      style={{
        "--cta-color": themeColor || "#E02327",
      }}
      aria-label="Join Club Call To Action"
    >
      <div className="club-join-cta-left">
        <div className="club-join-cta-icon-wrapper">
          <img
            src={icon || defaultJoinIcon}
            alt="Club Icon"
            className="club-join-cta-icon"
            loading="lazy"
          />
        </div>

        <div className="club-join-cta-text">
          <h3 className="club-join-cta-title">{title}</h3>
          <p className="club-join-cta-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="club-join-cta-right">
        <button
          type="button"
          className="club-join-cta-btn"
          onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
        >
          <span>{buttonText}</span>
          <svg
            className="club-join-cta-btn-arrow"
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
