import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../home/Header";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import ClubHero from "./ClubHero";
import ClubOverview from "./ClubOverview";
import ClubFaculty from "./ClubFaculty";
import ClubStudents from "./ClubStudents";
import ClubJoinCTA from "./ClubJoinCTA";
import { getClubData } from "./clubsData";
import "../../Styles/clubs/ClubPage.css";

export default function ClubPage({ defaultClubId = "rrc" }) {
  const { clubId, category, id } = useParams();
  const activeId = clubId || category || id || defaultClubId;
  const currentClub = getClubData(activeId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeId]);

  return (
    <div className="club-page-wrapper">
      {/* 1. Global Navigation Header */}
      <Header activePage="life" activeSubPage={currentClub.id} />

      <main className="club-page-main">
        {/* 2. Hero Banner Section */}
        <ClubHero
          title={currentClub.heroTitle || "Clubs & Activities"}
          subtitle={currentClub.heroSubtitle}
        />

        {/* 3. Core Content Body */}
        <div className="club-page-container">
          {/* Club Info & Illustration Overview Card */}
          <ClubOverview club={currentClub} />

          {/* Dynamic Faculty Members Grid */}
          <ClubFaculty faculty={currentClub.faculty} />

          {/* Dynamic Student Coordinators Grid */}
          <ClubStudents students={currentClub.studentCoordinators} />

          {/* Join Club Call-To-Action Card */}
          <ClubJoinCTA
            title={currentClub.ctaTitle}
            subtitle={currentClub.ctaSubtitle}
            buttonText={currentClub.ctaButtonText}
            icon={currentClub.joinIcon}
            themeColor={currentClub.themeColor}
          />
        </div>
      </main>

      {/* 4. Global Footer */}
      <Footer />

      {/* 5. Admission Apply Modal */}
      <ApplyModal />
    </div>
  );
}
