import React, { useEffect } from "react";
import Header from "../../home/Header";
import ResearchHero from "./ResearchHero";
import ResearchStats from "./ResearchStats";
import ResearchObjectives from "./ResearchObjectives";
import ResearchFunctions from "./ResearchFunctions";
import ResearchResponsibilities from "./ResearchResponsibilities";
import ResearchRole from "./ResearchRole";
import ResearchEcosystem from "./ResearchEcosystem";
import CTABanner from "../../CTABanner";
import Footer from "../../home/Footer";
import ApplyModal from "../../home/ApplyModal";
import "../../../Styles/academics/research/AcademicResearch.css";

export default function AcademicResearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="academic-page-wrapper">
      {/* 1. Global Navigation Bar with active 'academics' and 'research' state */}
      <Header activePage="academics" activeSubPage="research" />

      <main className="academic-main-content">
        {/* 2. Research Hero Section */}
        <ResearchHero />

        {/* 3. Research Stats Bar (5 metrics) */}
        <ResearchStats />

        {/* 4. Research Objectives (10 cards with 2 centered in row 3) */}
        <ResearchObjectives />

        {/* 5. Functions (9 cards in pink container) */}
        <ResearchFunctions />

        {/* 6. Responsibilities of R&D Cell (4 cards) */}
        <ResearchResponsibilities />

        {/* 7. Role of R&D Cell (4 cards in pink container) */}
        <ResearchRole />

        {/* 8. Research Ecosystem Diagram */}
        <ResearchEcosystem />

        {/* 9. Common CTA Banner */}
        <CTABanner />
      </main>

      {/* 10. Global Footer */}
      <Footer />

      {/* 11. Admission Enquiry Modal */}
      <ApplyModal />
    </div>
  );
}
