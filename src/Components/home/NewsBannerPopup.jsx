import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { lockScroll, unlockScroll } from "../../Hooks/scrollLock";
import closeIcon from "../../assets/icons/modal/close.svg";
import "../../Styles/home/NewsBannerPopup.css";

// Picks up any "latest-news.*" image from the news folder, so the banner can be
// swapped by replacing that file (jpg, jpeg, png or webp).
const bannerModules = import.meta.glob(
  "../../assets/images/news/latest-news.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const bannerSrc = Object.values(bannerModules)[0];

export default function NewsBannerPopup() {
  const [isOpen, setIsOpen] = useState(Boolean(bannerSrc));
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return undefined;

    lockScroll();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsClosing(true);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      unlockScroll();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Play the exit animation first; the popup unmounts when it finishes
  const closeBanner = () => setIsClosing(true);

  const handleAnimationEnd = (e) => {
    if (isClosing && e.target === e.currentTarget) setIsOpen(false);
  };

  const openNews = () => {
    closeBanner();
    navigate("/news-events");
  };

  if (!isOpen) return null;

  return (
    <div
      className={`news-banner-overlay${isClosing ? " is-closing" : ""}`}
      onClick={closeBanner}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className="news-banner-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Latest news"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="news-banner-close-btn"
          onClick={closeBanner}
          aria-label="Close banner"
        >
          <img src={closeIcon} alt="" />
        </button>
        <button type="button" className="news-banner-image-btn" onClick={openNews}>
          <img src={bannerSrc} alt="Latest news from Mother Terasa College" className="news-banner-image" />
        </button>
      </div>
    </div>
  );
}
