import React, { useEffect } from "react";
import Header from "../home/Header";
import FacilitiesHero from "./FacilitiesHero";
import FacilitiesGrid from "./FacilitiesGrid";
import CTABanner from "../CTABanner";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import "../../Styles/facilities/FacilitiesPage.css";

export default function FacilitiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="facilities-page-wrapper">
      {/* 1. Global Navigation Bar with active 'facilities' state */}
      <Header activePage="facilities" activeSubPage="facilities" />

      <main className="facilities-main-content">
        {/* 2. Hero Section */}
        <FacilitiesHero />

        {/* 3. 10 Facilities Grid */}
        <FacilitiesGrid />

        {/* 4. Common CTA Banner */}
        <CTABanner />
      </main>

      {/* 5. Global Footer */}
      <Footer />

      {/* 6. Admission Enquiry Modal */}
      <ApplyModal />
    </div>
  );
}
