import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../home/Header";
import DepartmentsHero from "./DepartmentsHero";
import DepartmentItems from "./DepartmentItems";
import { departmentsData } from "./departmentsData";
import CTABanner from "../CTABanner";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import "../../Styles/departments/DepartmentsPage.css";

export default function DepartmentsPage({ defaultCategory = "" }) {
  const { category: paramCategory } = useParams();

  // Normalize category name
  const rawCategory = (paramCategory || defaultCategory || "science").toLowerCase();
  let categoryKey = "science";
  if (rawCategory.includes("art")) {
    categoryKey = "arts";
  } else if (rawCategory.includes("manage") || rawCategory.includes("commerce")) {
    categoryKey = "management";
  } else if (rawCategory.includes("sci")) {
    categoryKey = "science";
  }

  const currentCategory = departmentsData[categoryKey] || departmentsData.science;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryKey]);

  return (
    <div className="departments-page-wrapper">
      {/* 1. Header with 'departments' active and specific subpage highlighted */}
      <Header activePage="departments" activeSubPage={currentCategory.id} />

      <main className="departments-main-content">
        {/* 2. Hero Section with category-specific hero image and copy */}
        <DepartmentsHero
          title={currentCategory.heroTitle}
          description={currentCategory.heroDesc}
          heroImage={currentCategory.heroImage}
        />

        {/* 3. Department Cards Grid with category-specific items */}
        <DepartmentItems
          titlePrefix={currentCategory.sectionTitlePrefix}
          titleHighlight={currentCategory.sectionTitleHighlight}
          subtitle={currentCategory.sectionDesc}
          items={currentCategory.items}
        />

        {/* 4. Common CTA Banner */}
        <CTABanner />
      </main>

      {/* 5. Global Footer */}
      <Footer />

      {/* 6. Admission Apply Modal */}
      <ApplyModal />
    </div>
  );
}
