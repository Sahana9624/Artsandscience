import React, { useEffect } from "react";
import Header from "../../home/Header";
import AcademicHero from "./AcademicHero";
import AcademicStats from "./AcademicStats";
import UndergraduatePrograms from "./UndergraduatePrograms";
import CTABanner from "../../CTABanner";
import Footer from "../../home/Footer";
import ApplyModal from "../../home/ApplyModal";
import "../../../Styles/academics/ug/Academics.css";

export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="academic-page-wrapper">
      {/* 1. Global Navigation Bar with active 'academics' and 'ug' state */}
      <Header activePage="academics" activeSubPage="ug" />

      <main className="academic-main-content">
        {/* 2. Hero Section */}
        <AcademicHero />

        {/* 3. Key Academic Stats Bar */}
        <AcademicStats />

        {/* 4. Undergraduate Programs Grid */}
        <UndergraduatePrograms />

        {/* 5. Common CTA Banner */}
        <CTABanner />
      </main>

      {/* 6. Global Footer */}
      <Footer />

      {/* 7. Admission Enquiry Modal */}
      <ApplyModal />
    </div>
  );
}
