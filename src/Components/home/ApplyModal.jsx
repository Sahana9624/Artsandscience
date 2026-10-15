import React, { useState, useEffect, useRef } from "react";
import { useApply } from "../../Context/ApplyContext";
import SubmissionModal from "../SubmissionModal";
import { lockScroll, unlockScroll } from "../../Hooks/scrollLock";
import useFitToViewport from "../../Hooks/useFitToViewport";
import closeIcon from "../../assets/icons/modal/close.svg";
import chevronIcon from "../../assets/icons/modal/chevron-down.svg";
import chevronSmIcon from "../../assets/icons/modal/chevron-down-sm.svg";
import "../../Styles/home/ApplyModal.css";

const INITIAL_FORM_STATE = {
  fullName: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  degree: "",
  program: "",
  consent: false,
};

const INDIAN_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Other",
];

export default function ApplyModal() {
  const { applyOpen, setApplyOpen } = useApply ? useApply() : { applyOpen: false, setApplyOpen: () => {} };
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    buttonText: "",
  });

  // Lock background scroll when modal overlay is active without disturbing layout or scroll position
  useEffect(() => {
    const isOverlayActive = applyOpen || statusModal.isOpen;
    if (!isOverlayActive) return;

    lockScroll();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (applyOpen) {
          setApplyOpen(false);
        } else if (statusModal.isOpen) {
          setStatusModal({
            isOpen: false,
            type: "success",
            title: "",
            buttonText: "",
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      unlockScroll();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [applyOpen, statusModal.isOpen, setApplyOpen]);

  // Scale the form down to fit short screens / zoomed browsers
  const modalRef = useRef(null);
  useFitToViewport(modalRef, applyOpen);

  if (!applyOpen && !statusModal.isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneKeyDown = (e) => {
    // Allow navigational / edit keys
    if (
      ["Backspace", "Tab", "Delete", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key) ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }
    // Block non-digit characters
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handlePhoneChange = (e) => {
    // Strictly extract only digits and limit to maximum 10 digits
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
  };

  const handleDegreeChange = (e) => {
    const degreeValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      degree: degreeValue,
      program: "", // Reset program when degree changes
    }));
  };

  // Validation conditions
  const isNameValid = formData.fullName.trim().length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isPhoneValid = formData.phone.length === 10;
  const isStateValid = formData.state.trim().length > 0;
  const isCityValid = formData.city.trim().length > 0;
  const isDegreeValid = formData.degree.trim().length > 0;
  const isProgramValid = formData.program.trim().length > 0;
  const isConsentValid = formData.consent === true;

  // Submit button is enabled ONLY when all input fields are filled & valid
  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isStateValid &&
    isCityValid &&
    isDegreeValid &&
    isProgramValid &&
    isConsentValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setFormData(INITIAL_FORM_STATE);
    setApplyOpen(false);
    setStatusModal({
      isOpen: true,
      type: "success",
      title: "Enquiry Successfully Submitted",
      buttonText: "Continue",
    });
  };

  return (
    <>
      {applyOpen && (
        <div className="home-apply-overlay" onClick={() => setApplyOpen(false)}>
          <div
            ref={modalRef}
            className="home-apply-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="home-apply-close-btn"
              onClick={() => setApplyOpen(false)}
              aria-label="Close"
            >
              <img src={closeIcon} alt="" className="home-apply-close-icon" />
            </button>

            <h2 className="home-apply-title">
              Admissions Open <span>2026</span>
            </h2>
            <p className="home-apply-subtitle">
              Arts & Science Applications - 2026
            </p>

            <form className="home-apply-form" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="home-apply-field">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="home-apply-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number (Strictly 10 digits, numbers only) */}
              <div className="home-apply-phone-row">
                <span className="home-apply-country-code">
                  +91
                  <picture>
                    <source media="(max-width: 768px), (max-height: 500px)" srcSet={chevronSmIcon} />
                    <img src={chevronIcon} alt="" className="home-apply-country-chevron" />
                  </picture>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your Mobile number *"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  maxLength={10}
                  required
                  className="home-apply-phone-input"
                />
              </div>

              {/* State + City */}
              <div className="home-apply-row">
                <div className="home-apply-field">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Enter your State *</option>
                    {INDIAN_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="home-apply-field">
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your City *"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Degree + Program */}
              <div className="home-apply-row">
                <div className="home-apply-field">
                  <select
                    name="degree"
                    required
                    value={formData.degree}
                    onChange={handleDegreeChange}
                  >
                    <option value="" disabled>Select Degree *</option>
                    <option value="bachelors">Undergraduate (UG)</option>
                    <option value="masters">Postgraduate (PG)</option>
                  </select>
                </div>
                <div className="home-apply-field">
                  <select
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Program *</option>
                    {(!formData.degree || formData.degree === "bachelors") && (
                      <>
                        <option value="bsc">B.Sc - Bachelor of Science</option>
                        <option value="bcom">B.Com - Bachelor of Commerce</option>
                        <option value="bba">BBA - Bachelor of Business Administration</option>
                      </>
                    )}
                    {formData.degree === "masters" && (
                      <>
                        <option value="msc">M.Sc - Master of Science</option>
                        <option value="mcom">M.Com - Master of Commerce</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Consent Checkbox */}
              <label className="home-apply-checkbox-label">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <span>
                  I authorize Mother Terasa Arts & Science college and its representatives to contact me regarding updates and notifications through Email, SMS, WhatsApp, and Calls. This consent overrides any DND/NDNC registration. *
                </span>
              </label>

              {/* Submit Button (Enabled ONLY when all fields are filled & valid) */}
              <button
                type="submit"
                className="home-apply-submit-btn"
                disabled={!isFormValid}
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Submission Status Modal */}
      <SubmissionModal
        isOpen={statusModal.isOpen}
        type={statusModal.type}
        title={statusModal.title}
        buttonText={statusModal.buttonText}
        onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
      />
    </>
  );
}
