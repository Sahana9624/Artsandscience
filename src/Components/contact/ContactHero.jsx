import React, { useRef } from "react";
import heroBg from "../../assets/images/contact/contact-hero.png";
import "../../Styles/contact/ContactHero.css";

export default function ContactHero({
  title = "Contact Us",
  subtitle = "We're here to help you with admissions, enquiries, and any information you need. Feel free to reach us!",
  phone = "+91 87545 61166",
  email = "mtcasprincipal@gmail.com",
  address = "Mettusalai, Illupur, Tamil Nadu 622102",
  mapLink = "https://maps.google.com/?q=Mother+Terasa+College+of+Arts+and+Science+Illuppur",
}) {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="contact-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Contact Us Hero Banner"
    >
      <div className="contact-hero-overlay" />
      <div className="contact-hero-container">
        {/* Left: Titles & Action Buttons */}
        <div className="contact-hero-left">
          <h1 className="contact-hero-title">{title}</h1>
          <p className="contact-hero-subtitle">{subtitle}</p>

          <div className="contact-hero-actions">
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="contact-btn-call">
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Us Now</span>
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn-directions glass-effect"
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
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Right: Glassmorphism Info Card */}
        <div className="contact-glass-card glass-effect glass-effect--card">
          {/* Address */}
          <div className="contact-info-item">
            <div className="contact-info-icon-wrapper">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-info-content">
              <span className="contact-info-label">Address</span>
              <span className="contact-info-value">{address}</span>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-info-item">
            <div className="contact-info-icon-wrapper">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-info-content">
              <span className="contact-info-label">Phone</span>
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="contact-info-value"
              >
                {phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="contact-info-item">
            <div className="contact-info-icon-wrapper">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-info-content">
              <span className="contact-info-label">Email</span>
              <a href={`mailto:${email}`} className="contact-info-value">
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
