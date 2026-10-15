import React, { useEffect, useRef } from "react";
import "../Styles/SubmissionModal.css";
import { lockScroll, unlockScroll } from "../Hooks/scrollLock";
import useFitToViewport from "../Hooks/useFitToViewport";
import closeIcon from "../assets/icons/modal/close.svg";
import successIcon from "../assets/success-overlay.svg";
import errorIcon from "../assets/error-overlay.svg";

const SubmissionModal = ({
  isOpen,
  type = "success", // "success" or "error" / "failure"
  title,
  buttonText,
  icon,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      lockScroll();
      return unlockScroll;
    }
  }, [isOpen]);

  // Scale the card down to fit short / zoomed screens
  const cardRef = useRef(null);
  useFitToViewport(cardRef, isOpen);

  if (!isOpen) return null;

  const isSuccess = type === "success";
  const defaultTitle = isSuccess
    ? "Enquire Successfully Submitted"
    : "Your Enquire Has Been Failed";
  const defaultBtnText = isSuccess ? "Continue" : "Try Again";
  const modalImg = icon || (isSuccess ? successIcon : errorIcon);

  return (
    <div className="submission-modal-overlay" onClick={onClose}>
      <div
        ref={cardRef}
        className="submission-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="submission-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={closeIcon} alt="" className="submission-modal-close-icon" />
        </button>

        {/* Success / Error Image Icon */}
        <div className="submission-modal-icon-wrapper">
          <img
            src={modalImg}
            alt={isSuccess ? "Success" : "Error"}
            className="submission-modal-icon-img"
          />
        </div>

        {/* Title Text */}
        <h3 className="submission-modal-title">
          {title || defaultTitle}
        </h3>

        {/* Action Button */}
        <button
          type="button"
          className="submission-modal-btn"
          onClick={onClose}
        >
          {buttonText || defaultBtnText}
        </button>
      </div>
    </div>
  );
};

export default SubmissionModal;
