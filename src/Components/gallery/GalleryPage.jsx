import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../home/Header";
import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";
import GalleryDetail from "./GalleryDetail";
import CTABanner from "../CTABanner";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import "../../Styles/gallery/GalleryPage.css";

export default function GalleryPage() {
  const { albumId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [albumId]);

  return (
    <div className="gallery-page-wrapper">
      {/* 1. Global Navigation Bar with active 'gallery' state */}
      <Header activePage="gallery" activeSubPage="gallery" />

      <main className="gallery-main-content">
        {/* 2. Hero Section */}
        <GalleryHero albumId={albumId} />

        {/* 3. Albums Grid or Single Album Photo View */}
        {albumId ? <GalleryDetail /> : <GalleryGrid />}

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
