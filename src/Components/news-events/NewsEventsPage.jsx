import React, { useEffect } from "react";
import Header from "../home/Header";
import NewsEventsHero from "./NewsEventsHero";
import NewsEventsList from "./NewsEventsList";
import CTABanner from "../CTABanner";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import "../../Styles/news-events/NewsEventsPage.css";

export default function NewsEventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-events-page-wrapper">
      {/* 1. Global Navigation Bar with active 'news-events' state */}
      <Header activePage="news-events" activeSubPage="news-events" />

      <main className="news-events-main-content">
        {/* 2. Hero Section */}
        <NewsEventsHero />

        {/* 3. News & Events List */}
        <NewsEventsList />

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
