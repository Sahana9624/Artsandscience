import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import heroImg from "../../assets/images/gallery/gallery-hero.png";
import { galleryAlbums } from "./galleryData";
import "../../Styles/gallery/GalleryHero.css";

const getRandomAlbumPhoto = (targetAlbumId) => {
  if (!targetAlbumId) return heroImg;
  const album = galleryAlbums.find((a) => a.id === targetAlbumId);
  if (!album) return heroImg;

  const photoPool = [];
  if (Array.isArray(album.photos) && album.photos.length > 0) {
    album.photos.forEach((p) => {
      if (p && p.src) photoPool.push(p.src);
    });
  }
  if (photoPool.length === 0 && album.coverImage) {
    photoPool.push(album.coverImage);
  }

  if (photoPool.length === 0) return heroImg;

  const randomIndex = Math.floor(Math.random() * photoPool.length);
  return photoPool[randomIndex];
};

export default function GalleryHero({ albumId: propAlbumId }) {
  const params = useParams();
  const currentAlbumId = propAlbumId || params.albumId;
  const heroRef = useRef(null);

  const [bgImage, setBgImage] = useState(() =>
    getRandomAlbumPhoto(currentAlbumId)
  );

  useEffect(() => {
    setBgImage(getRandomAlbumPhoto(currentAlbumId));
  }, [currentAlbumId]);

  return (
    <section
      ref={heroRef}
      className="gallery-hero-section"
      id="gallery-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="gallery-hero-overlay" />
      <div className="gallery-hero-container">
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">
            Celebrating Every Milestone, Achievement, And Memorable Moment At Mother Terasa College Of Arts &amp; Science
          </h1>
          <p className="gallery-hero-desc">
            Explore A Vibrant Collection Of Photographs Showcasing Academic Excellence, Cultural Celebrations, Sports, Campus Events, Student Achievements, And Unforgettable Moments That Reflect The Spirit Of Learning And Community At Mother Terasa College Of Arts &amp; Science.
          </p>
        </div>
      </div>
    </section>
  );
}
