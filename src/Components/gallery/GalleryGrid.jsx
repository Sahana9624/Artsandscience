import React from "react";
import { Link } from "react-router-dom";
import { galleryAlbums } from "./galleryData";
import galleryIcon from "../../assets/icons/gallery.svg";
import "../../Styles/gallery/GalleryGrid.css";

export default function GalleryGrid() {
  return (
    <section className="gallery-grid-section" id="gallery-albums">
      <div className="gallery-grid-container">
        <div className="gallery-albums-grid">
          {galleryAlbums.map((album) => {
            const count = (album.photos && album.photos.length) ?? album.count ?? 0;
            const formattedCount = count < 10 ? `0${count}` : `${count}`;

            return (
              <Link
                key={album.id}
                to={`/gallery/${album.id}`}
                className="gallery-album-card"
              >
                <div className="gallery-album-image-wrap">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="gallery-album-image"
                    loading="lazy"
                  />
                </div>

                <div className="gallery-album-info">
                  <h2 className="gallery-album-title" title={album.title}>
                    {album.title}
                  </h2>
                  <span className="gallery-album-count">
                    <img
                      src={galleryIcon}
                      alt=""
                      className="gallery-album-count-icon"
                      aria-hidden="true"
                    />
                    {formattedCount}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
