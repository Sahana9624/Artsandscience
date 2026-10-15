import React from "react";
import { Link } from "react-router-dom";
import offer1Img from "../../assets/images/home/offer/offer-1.jpg";
import offer2Img from "../../assets/images/home/offer/offer-2.jpg";
import "../../Styles/home/CoursesOffered.css";
import ArrowIcon from "../common/ArrowIcon";

export default function CoursesOffered() {
  const courses = [
    {
      id: "ug",
      title: "Undergraduate Programs",
      image: offer1Img,
      description:
        "Build a strong academic foundation through industry-relevant undergraduate programmes that combine theoretical knowledge, practical learning, and skill development across Arts, Science, Commerce, and Management disciplines.",
      highlights: "3 Years Duration | 10+2 Eligibility | Career-Focused Curriculum",
      link: "/academics",
    },
    {
      id: "pg",
      title: "Postgraduate Programs",
      image: offer2Img,
      description:
        "Enhance your knowledge through advanced postgraduate programmes that foster research, innovation, analytical thinking, and professional excellence for higher education and career advancement.",
      highlights: "2 Years Duration | Bachelor's Degree Eligibility | Advanced Learning & Research",
      link: "/academics/pg",
    },
  ];

  return (
    <section className="home-courses-section" id="courses">
      <div className="home-courses-container">
        {/* Section Header */}
        <div className="home-section-header">
          <h2 className="home-section-title">
            Courses <span className="highlight-maroon">Offered</span>
          </h2>
          <p className="home-section-subtitle">
            Explore a wide range of undergraduate and postgraduate programmes designed to
            build knowledge, skills, and career opportunities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="home-courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-card-image-wrap">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-card-image"
                  loading="lazy"
                />
              </div>

              <div className="course-card-body">
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.description}</p>

                <div className="course-card-bullets">
                  <span className="course-bullet-item">{course.highlights}</span>
                </div>

                <Link to={course.link} className="course-card-btn">
                  Explore Program <ArrowIcon className="course-arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
