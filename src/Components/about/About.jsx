import React, { useEffect } from "react";
import Header from "../home/Header";
import AboutHero from "./AboutHero";
import CampusExcellence from "./CampusExcellence";
import VisionMission from "./VisionMission";
import LeadershipMessages from "./LeadershipMessages";
import Administration from "./Administration";
import CTABanner from "../CTABanner";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import "../../Styles/about/About.css";

export default function About() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const isCodeOfConduct = typeof window !== "undefined" && window.location.hash === "#code-of-conduct";

  return (
    <div className="about-page-wrapper">
      {/* 1. Header / Navbar with active 'about' state */}
      <Header activePage="about" activeSubPage={isCodeOfConduct ? "code-of-conduct" : "about-mtcas"} />

      <main className="about-main-content">
        {/* 2. About Hero Section */}
        <AboutHero />

        {/* 3. Campus Excellence Aerial Image & Overview */}
        <CampusExcellence />

        {/* 4. Vision & Mission Cards */}
        <VisionMission />

        {/* Code of Conduct Anchor Point */}
        <span id="code-of-conduct" style={{ display: "block", position: "relative", top: "-84px", visibility: "hidden" }} />

        {/* 5. Leadership Messages (Founder, Chairman, Principal) */}
        <LeadershipMessages />

        {/* 6. Administration Profiles */}
        <Administration />

        {/* 7. Common CTA Banner Section */}
        <CTABanner />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Admission Modal */}
      <ApplyModal />
    </div>
  );
}

export {
  AboutHero,
  CampusExcellence,
  VisionMission,
  LeadershipMessages,
  Administration,
};
