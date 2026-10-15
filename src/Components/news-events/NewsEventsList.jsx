import React from "react";
import { newsEventsData } from "./newsEventsData";
import "../../Styles/news-events/NewsEventsList.css";

export default function NewsEventsList() {
  const handleDownloadAttachment = (item) => {
    // Generate text brochure/announcement or download poster
    const content = `MOTHER TERASA COLLEGE OF ARTS & SCIENCE
===========================================================
${item.category}: ${item.title}
Date: ${item.date}
===========================================================

${item.description}

===========================================================
For Enquiries: Contact Mother Terasa College of Arts & Science
Website: www.motherterasacollege.com
`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${item.id}-details.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="news-events-section" id="news-events-list">
      <div className="news-events-container">
        <div className="news-events-list">
          {newsEventsData.map((item) => (
            <article key={item.id} className="news-event-card">
              <div className="news-event-poster-wrap">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="news-event-poster"
                  loading="lazy"
                />
              </div>

              <div className="news-event-body">
                <div className="news-event-content-top">
                  <span className="news-event-tag">
                    {item.category} | {item.date}
                  </span>
                  <h2 className="news-event-title">{item.title}</h2>
                  {item.description && (
                    <p className="news-event-desc">{item.description}</p>
                  )}
                </div>

                <button
                  type="button"
                  className="news-event-action-btn"
                  title="Download Now"
                  aria-label={`Download details for ${item.title}`}
                  onClick={() => handleDownloadAttachment(item)}
                >
                  <svg
                    className="news-event-action-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="news-event-action-text">Download Now</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
