import React from "react";
import "../../Styles/contact/ContactMap.css";

export default function ContactMap({
  name = "Mother Terasa College of Arts & Science",
  address = "Mettusalai, Illupur, Tamil Nadu - 622102.",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.004495574347!2d78.6705141!3d10.5199658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa6595f9c1b753%3A0xc48c0fb4987f4c58!2sMother%20Terasa%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  largeMapLink = "https://maps.google.com/?q=Mother+Terasa+College+of+Arts+and+Science+Illuppur",
}) {
  return (
    <div className="contact-map-card" aria-label="Our Location Map">
      <h2 className="contact-map-title">Our Location</h2>

      <div className="contact-map-viewport">
        {/* Floating Google Maps Style Info Box */}
        <div className="contact-map-info-overlay">
          <span className="contact-map-info-name">{name}</span>
          <span className="contact-map-info-addr">{address}</span>
          <a
            href={largeMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-map-info-link"
          >
            View larger map
          </a>
        </div>

        {/* Embedded Google Maps View */}
        <iframe
          src={mapUrl}
          className="contact-map-iframe"
          loading="lazy"
          title="College Location Map"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
