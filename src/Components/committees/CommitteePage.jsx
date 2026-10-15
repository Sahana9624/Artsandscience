import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../home/Header";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import CommitteeHero from "./CommitteeHero";
import CommitteeOverview from "./CommitteeOverview";
import CommitteeFaculty from "./CommitteeFaculty";
import CommitteeStudents from "./CommitteeStudents";
import CommitteeCTA from "./CommitteeCTA";
import { getCommitteeData } from "./committeesData";
import "../../Styles/committees/CommitteePage.css";

export default function CommitteePage({ defaultCommitteeId = "anti-ragging" }) {
  const { committeeId, clubId, category, id } = useParams();
  const activeId = committeeId || clubId || category || id || defaultCommitteeId;
  const currentCommittee = getCommitteeData(activeId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeId]);

  return (
    <div className="committee-page-wrapper">
      {/* 1. Global Navigation Header */}
      <Header activePage="life" activeSubPage={currentCommittee.id} />

      <main className="committee-page-main">
        {/* 2. Hero Banner Section */}
        <CommitteeHero
          title={currentCommittee.heroTitle || "Committees & Cells"}
          subtitle={currentCommittee.heroSubtitle}
        />

        {/* 3. Core Content Body */}
        <div className="committee-page-container">
          {/* Committee Info & Illustration Overview Card */}
          <CommitteeOverview committee={currentCommittee} />

          {/* Dynamic Faculty Members Grid */}
          <CommitteeFaculty faculty={currentCommittee.faculty} />

          {/* Dynamic Student Coordinators Grid */}
          <CommitteeStudents students={currentCommittee.studentCoordinators} />

          {/* Committee Call-To-Action Card */}
          <CommitteeCTA
            title={currentCommittee.ctaTitle}
            subtitle={currentCommittee.ctaSubtitle}
            buttonText={currentCommittee.ctaButtonText}
            icon={currentCommittee.joinIcon}
            themeColor={currentCommittee.themeColor}
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
