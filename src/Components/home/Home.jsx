import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Welcome from "./Welcome";
import CoursesOffered from "./CoursesOffered";
import Achievements from "./Achievements";
import CampusLife from "./CampusLife";
import SuccessStories from "./SuccessStories";
import FAQSection from "./FAQSection";
import CTABanner from "../CTABanner";
import Footer from "./Footer";
import ApplyModal from "./ApplyModal";
import "../../Styles/home/Home.css";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      {/* 1. Header / Navbar */}
      <Header />

      <main className="home-main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Welcome Section */}
        <Welcome />

        {/* 4. Courses Offered */}
        <CoursesOffered />

        {/* 5. Our Achievements */}
        <Achievements />

        {/* 6. Campus Life */}
        <CampusLife />

        {/* 7. Student Success Stories */}
        <SuccessStories />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Call to Action Banner */}
        <CTABanner />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Admission Enquiry Modal */}
      <ApplyModal />
    </div>
  );
}

export {
  Header,
  Hero,
  Welcome,
  CoursesOffered,
  Achievements,
  CampusLife,
  SuccessStories,
  FAQSection,
  Footer,
  ApplyModal,
};
