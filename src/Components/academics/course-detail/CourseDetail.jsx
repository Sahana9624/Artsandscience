import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../home/Header";
import Footer from "../../home/Footer";
import CTABanner from "../../CTABanner";
import ApplyModal from "../../home/ApplyModal";
import { coursesData } from "./coursesData";
import CourseHero from "./CourseHero";
import CourseOverview from "./CourseOverview";
import CourseWhyChoose from "./CourseWhyChoose";
import CourseCurriculum from "./CourseCurriculum";
import CourseCareers from "./CourseCareers";
import "../../../Styles/academics/course-detail/CourseDetail.css";

export default function CourseDetail() {
  const { courseId } = useParams();

  // Scroll to top when page loads or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  // Determine if this is a PG route or PG course
  const isPGPath = window.location.pathname.includes("/pg");
  const fallbackId = isPGPath ? "ma-tamil" : "ba-tamil";
  const course = (courseId && coursesData[courseId]) || coursesData[fallbackId];
  const isPGCourse =
    course.id.startsWith("m") ||
    course.id === "mba" ||
    (course.courseInfo && course.courseInfo.duration.includes("2"));

  return (
    <div className="course-detail-page-wrapper">
      {/* 1. Global Navigation Bar with active 'academics' state and proper subpage */}
      <Header activePage="academics" activeSubPage={isPGCourse ? "pg" : "ug"} />

      <main className="course-detail-main">
        {/* 2. Hero Section */}
        <CourseHero course={course} />

        {/* 3. Program Overview Section */}
        <CourseOverview course={course} />

        {/* 4. Why Choose This Program Section */}
        <CourseWhyChoose course={course} />

        {/* 5. Curriculum Structure Section */}
        <CourseCurriculum course={course} />

        {/* 6. Career Opportunities Section */}
        <CourseCareers course={course} />

        {/* 7. Common CTA Banner */}
        <CTABanner />
      </main>

      {/* 8. Global Footer */}
      <Footer />

      {/* 9. Admission Enquiry Modal */}
      <ApplyModal />
    </div>
  );
}
