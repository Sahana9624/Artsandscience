import React, { useState } from "react";
import "../../Styles/contact/ContactForm.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  department: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

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
  const isDeptValid = formData.department.trim().length > 0;

  // Submit button enabled ONLY after filling all input fields EXCEPT message box
  const isFormValid = isNameValid && isEmailValid && isPhoneValid && isDeptValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmitted(true);
    setFormData(INITIAL_FORM);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-form-card" aria-label="Send us a message card">
      <h2 className="contact-card-title">Send us a message</h2>

      {submitted && (
        <div className="contact-success-msg" role="alert">
          Thank you! Your message has been sent successfully. We will get in touch with you shortly.
        </div>
      )}

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

        <div className="contact-select-wrapper">
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
        </div>

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
          disabled={!isFormValid}
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
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
