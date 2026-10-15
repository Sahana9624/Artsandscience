import React, { useEffect } from "react";
import Header from "../../home/Header";
import PostgraduateHero from "./PostgraduateHero";
import PostgraduateStats from "./PostgraduateStats";
import PostgraduatePrograms from "./PostgraduatePrograms";
import CTABanner from "../../CTABanner";
import Footer from "../../home/Footer";
import ApplyModal from "../../home/ApplyModal";
import "../../../Styles/academics/ug/Academics.css";
import "../../../Styles/academics/pg/PostgraduatePrograms.css";

export default function PostgraduatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="academic-page-wrapper">
      {/* 1. Global Navigation Bar with active 'academics' and 'pg' state */}
      <Header activePage="academics" activeSubPage="pg" />

      <main className="academic-main-content">
        {/* 2. Hero Section for Postgraduate Programs */}
        <PostgraduateHero />

        {/* 3. Key Postgraduate Stats Bar */}
        <PostgraduateStats />

        {/* 4. Postgraduate Programs Grid */}
        <PostgraduatePrograms />

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
