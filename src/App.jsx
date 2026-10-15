import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApplyProvider } from './Context/ApplyContext';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Academics from './Components/academics/ug/Academics';
import PostgraduatePage from './Components/academics/pg/PostgraduatePage';
import AcademicResearchPage from './Components/academics/research/AcademicResearchPage';
import CourseDetail from './Components/academics/course-detail/CourseDetail';
import DepartmentsPage from './Components/departments/DepartmentsPage';
import FacilitiesPage from './Components/facilities/FacilitiesPage';
import NewsEventsPage from './Components/news-events/NewsEventsPage';
import GalleryPage from './Components/gallery/GalleryPage';
import ClubPage from './Components/clubs/ClubPage';
import CommitteePage from './Components/committees/CommitteePage';
import AccreditationPage from './Components/accreditation/AccreditationPage';
import ContactPage from './Components/contact/ContactPage';
import LegalPage from './Components/legal/LegalPage';
import useScrollReveal from './Hooks/useScrollReveal';
import './App.css';
import './Styles/ScrollReveal.css';
import './Styles/GlassEffect.css';
import './Styles/DesignFidelity.css';

// Applies scroll-reveal animations site-wide (must render inside the router)
function ScrollReveal() {
  useScrollReveal();
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ApplyProvider>
        <ScrollReveal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-mtcas" element={<About />} />
          <Route path="/code-of-conduct" element={<About />} />
          <Route path="/academic" element={<Academics />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/ug" element={<Academics />} />
          <Route path="/academics/pg" element={<PostgraduatePage />} />
          <Route path="/academics/pg-programs" element={<PostgraduatePage />} />
          <Route path="/pg-programs" element={<PostgraduatePage />} />
          <Route path="/academics/pg/:courseId" element={<CourseDetail />} />
          <Route path="/academics/pg-programs/:courseId" element={<CourseDetail />} />
          <Route path="/pg/:courseId" element={<CourseDetail />} />
          <Route path="/pg-course-description" element={<CourseDetail />} />
          <Route path="/pg-course-description/:courseId" element={<CourseDetail />} />
          <Route path="/academics/research" element={<AcademicResearchPage />} />
          <Route path="/academics/research-development" element={<AcademicResearchPage />} />
          <Route path="/academic-research" element={<AcademicResearchPage />} />
          <Route path="/research" element={<AcademicResearchPage />} />
          
          {/* Departments Routes (Arts, Management, Science) */}
          <Route path="/departments" element={<DepartmentsPage defaultCategory="science" />} />
          <Route path="/departments/:category" element={<DepartmentsPage />} />
          <Route path="/academic-departments" element={<DepartmentsPage defaultCategory="science" />} />

          <Route path="/academics/:courseId" element={<CourseDetail />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/course-description" element={<CourseDetail />} />
          <Route path="/course-description/:courseId" element={<CourseDetail />} />

          {/* Facilities Page Routes */}
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/facility" element={<FacilitiesPage />} />
          <Route path="/campus-facilities" element={<FacilitiesPage />} />

          {/* News & Events Page Routes */}
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/news" element={<NewsEventsPage />} />
          <Route path="/events" element={<NewsEventsPage />} />

          {/* Gallery Page Routes */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:albumId" element={<GalleryPage />} />

          {/* Clubs & Activities Routes */}
          <Route path="/clubs" element={<ClubPage defaultClubId="rrc" />} />
          <Route path="/clubs/:clubId" element={<ClubPage />} />
          <Route path="/club/:clubId" element={<ClubPage />} />
          <Route path="/club-activities" element={<ClubPage defaultClubId="rrc" />} />
          <Route path="/club-activities/:clubId" element={<ClubPage />} />

          {/* Committees & Cells Routes */}
          <Route path="/committees" element={<CommitteePage defaultCommitteeId="anti-ragging" />} />
          <Route path="/committees/:committeeId" element={<CommitteePage />} />
          <Route path="/committee/:committeeId" element={<CommitteePage />} />
          <Route path="/cells" element={<CommitteePage defaultCommitteeId="grievance" />} />
          <Route path="/cells/:committeeId" element={<CommitteePage />} />
          <Route path="/cell/:committeeId" element={<CommitteePage />} />

          {/* Accreditation Routes (IQAC, IIQA, SSR) */}
          <Route path="/accreditation" element={<AccreditationPage defaultTab="iqac" />} />
          <Route path="/accreditation/:tab" element={<AccreditationPage />} />
          <Route path="/iqac" element={<AccreditationPage defaultTab="iqac" />} />
          <Route path="/iiqa" element={<AccreditationPage defaultTab="iiqa" />} />
          <Route path="/ssr" element={<AccreditationPage defaultTab="ssr" />} />

          {/* Contact Us Routes */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<ContactPage />} />

          {/* Legal Pages Routes */}
          <Route path="/terms-and-conditions" element={<LegalPage pageId="terms" />} />
          <Route path="/terms" element={<LegalPage pageId="terms" />} />
          <Route path="/privacy-policy" element={<LegalPage pageId="privacy" />} />
          <Route path="/privacy" element={<LegalPage pageId="privacy" />} />
          <Route path="/refund-policy" element={<LegalPage pageId="refund" />} />
          <Route path="/return-refund-policy" element={<LegalPage pageId="refund" />} />
          <Route path="/cancellation-policy" element={<LegalPage pageId="cancellation" />} />

          {/* Catch-all fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </ApplyProvider>
    </BrowserRouter>
  );
}

export default App;
