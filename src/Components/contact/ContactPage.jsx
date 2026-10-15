import React, { useEffect } from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import CTABanner from "../CTABanner";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import "../../Styles/contact/ContactPage.css";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-wrapper">
      {/* 1. Global Navigation Header */}
      <Header activePage="contact" />

      <main className="contact-page-main">
        {/* 2. Hero Section with Actions and Glass Info Card */}
        <ContactHero />

        {/* 3. 2-Column Grid: Form & Location Map */}
        <div className="contact-page-container">
          <ContactForm />
          <ContactMap />
        </div>

        {/* 4. Pre-Footer Call to Action Banner (matches referral) */}
        <CTABanner />
      </main>

      {/* 5. Global Footer */}
      <Footer />

      {/* 6. Admission Apply Modal */}
      <ApplyModal />
    </div>
  );
}
