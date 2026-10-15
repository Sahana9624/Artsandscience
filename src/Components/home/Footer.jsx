import React from "react";
import { Link } from "react-router-dom";
import collegeLogo from "../../assets/logo.png";
import instagramIcon from "../../assets/instagram.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import youtubeIcon from "../../assets/youtube.svg";
import { legalLinks } from "../legal/legalData";
import "../../Styles/home/Footer.css";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/academics" },
    { label: "Research", href: "/research" },
    { label: "Department", href: "/departments" },
    { label: "Facilities", href: "/facilities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const activities = [
    { label: "Clubs", href: "/clubs" },
    { label: "Cells", href: "/cells" },
    { label: "News & Events", href: "/news-events" },
    { label: "Placements", href: "/contact" },
  ];


  return (
    <footer className="home-footer" id="main-footer">
      <div className="home-footer-container">
        {/* Main Section */}
        <div className="home-footer-main">
          {/* Left Column: Brand Info */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-brand-header">
              <img
                src={collegeLogo}
                alt="Mother Terasa College Logo"
                className="footer-brand-logo"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-title">MOTHER TERASA</span>
                <span className="footer-brand-subtitle">
                  College of Arts &amp; Science
                </span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Empowering students through quality<br className="desc-break" />
              education, practical learning and innovation.
            </p>
          </div>

          {/* Right Columns Group */}
          <div className="footer-links-group">
            {/* Column: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Activities */}
            <div className="footer-col">
              <h4 className="footer-col-title">Activities</h4>
              <ul className="footer-links-list">
                {activities.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith("/") ? (
                      <Link to={item.href} className="footer-link">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className="footer-link">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Legal */}
            <div className="footer-col">
              <h4 className="footer-col-title">Legal</h4>
              <ul className="footer-links-list">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider" />

        {/* Bottom Bar: Copyright & Socials */}
        <div className="home-footer-bottom">
          <div className="footer-copyright-text">
            <p>&copy; 2026 Mother Terasa Arts &amp; Science College | All rights reserved.</p>
            <p className="footer-sub-credit">
              Designed &amp; Developed by Ciphermutex Pvt. Ltd
            </p>
          </div>

          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon-btn"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon-btn"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon-btn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="social-icon-btn"
            >
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="social-icon-btn"
            >
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
