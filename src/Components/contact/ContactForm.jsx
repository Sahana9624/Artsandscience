import React, { useState } from "react";
import { createPortal } from "react-dom";
import SubmissionModal from "../SubmissionModal";
import "../../Styles/contact/ContactForm.css";

const WEB3FORMS_ACCESS_KEY = "44033051-c053-43c1-a839-baac6846f465";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  department: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    buttonText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    // Strictly extract digits and limit to 10 characters maximum
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
  };

  // Validation: Required fields check
  const isNameValid = formData.name.trim().length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isPhoneValid = formData.phone.length === 10;
  // Submit button enabled ONLY after filling all input fields EXCEPT message box
  // (department select is currently hidden, so it is not required)
  const isFormValid = isNameValid && isEmailValid && isPhoneValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);

    let succeeded = false;
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Enquiry - ${formData.name.trim()}`,
          from_name: "Mother Terasa College Website",
          replyto: formData.email.trim(),
          Name: formData.name.trim(),
          Email: formData.email.trim(),
          Phone: `+91 ${formData.phone}`,
          ...(formData.department && { Department: formData.department }),
          Message: formData.message.trim() || "(No message)",
        }),
      });
      const result = await response.json();
      succeeded = response.ok && result.success;
    } catch {
      succeeded = false;
    }

    setIsSubmitting(false);

    if (succeeded) {
      setFormData(INITIAL_FORM);
      setStatusModal({
        isOpen: true,
        type: "success",
        title: "Message Successfully Sent",
        buttonText: "Continue",
      });
    } else {
      // Keep the entered data so the user can retry without retyping
      setStatusModal({
        isOpen: true,
        type: "error",
        title: "Your Message Could Not Be Sent",
        buttonText: "Try Again",
      });
    }
  };

  return (
    <div className="contact-form-card" aria-label="Send us a message card">
      <h2 className="contact-card-title">Send us a message</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="contact-input-field"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          className="contact-input-field"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          className="contact-input-field"
          placeholder="Phone Number (10 digits) *"
          value={formData.phone}
          onChange={handlePhoneChange}
          onKeyDown={handlePhoneKeyDown}
          maxLength={10}
          required
        />

        {/* <div className="contact-select-wrapper">
          <select
            name="department"
            className={`contact-select-field ${formData.department ? "selected" : ""}`}
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Department *
            </option>
            <option value="Arts">Arts Departments</option>
            <option value="Management">Management Departments</option>
            <option value="Science">Science Departments</option>
            <option value="Admissions">Admissions Enquiry</option>
            <option value="Placement">Training & Placement Cell</option>
            <option value="General">General Enquiry</option>
          </select>
          <svg
            className="contact-select-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div> */}

        {/* Message is optional as requested */}
        <textarea
          name="message"
          className="contact-textarea-field"
          placeholder="Your Message (Optional)"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />

        {/* Submit button enabled ONLY when all required fields are filled */}
        <button
          type="submit"
          className="contact-submit-btn"
          disabled={!isFormValid || isSubmitting}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>
      </form>

      {/* Submission Status Modal (portaled so page-level transforms can't clip the overlay) */}
      {createPortal(
        <SubmissionModal
          isOpen={statusModal.isOpen}
          type={statusModal.type}
          title={statusModal.title}
          buttonText={statusModal.buttonText}
          onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
        />,
        document.body
      )}
    </div>
  );
}
