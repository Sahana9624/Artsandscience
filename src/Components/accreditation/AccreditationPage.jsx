import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../home/Header";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import CTABanner from "../CTABanner";
import AccreditationHero from "./AccreditationHero";
import IQACContent from "./IQACContent";
import NoDataCard from "./NoDataCard";
import { getAccreditationData } from "./accreditationData";
import "../../Styles/accreditation/AccreditationPage.css";

export default function AccreditationPage({ defaultTab = "iqac" }) {
  const { tab, page, id } = useParams();
  const activeTab = tab || page || id || defaultTab;
  const currentData = getAccreditationData(activeTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="accreditation-page-wrapper">
      {/* 1. Global Navigation Header */}
      <Header activePage="accreditation" activeSubPage={currentData.id} />

      <main className="accreditation-page-main">
        {/* 2. Hero Section */}
        <AccreditationHero
          eyebrow={currentData.eyebrow}
          title={currentData.title}
          subtitle={currentData.subtitle}
          heroImage={currentData.heroImage}
        />

        {/* 3. Core Content Body */}
        <div className="accreditation-page-container">
          {currentData.hasContent ? (
            <IQACContent data={currentData} />
          ) : (
            <NoDataCard
              image={currentData.noDataImage}
              title={currentData.noDataTitle}
              subtitle={currentData.noDataSubtitle}
            />
          )}
        </div>

        {/* 4. Pre-footer CTA Banner (matching referral) */}
        <CTABanner />
      </main>

      {/* 5. Global Footer */}
      <Footer />

      {/* 6. Admission Apply Modal */}
      <ApplyModal />
    </div>
  );
}
