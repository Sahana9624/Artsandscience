import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { galleryAlbums } from "./galleryData";
import "../../Styles/gallery/GalleryDetail.css";
import { lockScroll, unlockScroll } from "../../Hooks/scrollLock";

export default function GalleryDetail({ album: propAlbum }) {
  const { albumId } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const album =
    propAlbum ||
    galleryAlbums.find((a) => a.id === albumId) ||
    galleryAlbums[0];

  useEffect(() => {
    if (selectedPhoto) {
      lockScroll();

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedPhoto(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        unlockScroll();
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedPhoto]);

  if (!album) return null;

  return (
    <section className="gallery-detail-section" id="album-photos">
      <div className="gallery-detail-container">
        {/* Back Link */}
        {/* <Link to="/gallery" className="gallery-back-link">
          <span>&larr;</span>
          <span>Back to Albums</span>
        </Link> */}

        {/* Centered Album Heading with Highlight */}
        <div className="gallery-detail-header">
          <h2 className="gallery-detail-title">
            {album.titlePrefix}
            <span className="gallery-title-highlight">{album.titleHighlight}</span>
          </h2>
        </div>

        {/* 3-Column Photos Grid */}
        <div className="gallery-photos-grid">
          {(album.photos || []).map((photo, idx) => (
            <div
              key={photo.id || idx}
              className="gallery-photo-card"
              onClick={() => setSelectedPhoto(photo)}
              title="Click to view full photo"
            >
              <img
                src={photo.src}
                alt={photo.alt || `${album.title} - Photo ${idx + 1}`}
                className="gallery-photo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              &times;
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt || "Full photo preview"}
              className="gallery-lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
