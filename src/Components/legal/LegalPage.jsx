import React, { useEffect } from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import ApplyModal from "../home/ApplyModal";
import CTABanner from "../CTABanner";
import { legalPages } from "./legalData";
import "../../Styles/legal/LegalPage.css";

function renderBlock(block, idx) {
  if (typeof block === "string") {
    // Empty string renders as a blank line between paragraphs
    return block ? (
      <p key={idx} className="legal-text">{block}</p>
    ) : (
      <br key={idx} />
    );
  }

  if (block.list) {
    return (
      <ul key={idx} className="legal-list">
        {block.list.map((item, i) => (
          <li key={i}>
            <strong>{item.label}</strong>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={idx} className="legal-text">
      <strong>{block.label}</strong>
      {block.text}
    </p>
  );
}

export default function LegalPage({ pageId = "terms" }) {
  const page = legalPages[pageId] || legalPages.terms;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  return (
    <div className="legal-page-wrapper">
      {/* 1. Global Navigation Header */}
      <Header activePage="legal" />

      <main className="legal-page-main">
        {/* 2. Hero: eyebrow, title & description on a soft maroon fade */}
        <section className="legal-hero">
          <div
            className={`legal-hero-content ${
              page.compactHeader ? "legal-hero-compact" : ""
            }`}
          >
            <span className="legal-hero-eyebrow">{page.eyebrow}</span>
            <h1 className="legal-hero-title">{page.title}</h1>
            <p className="legal-hero-desc">{page.description}</p>
          </div>
        </section>

        {/* 3. Overview + numbered policy sections */}
        <section className="legal-content">
          {page.overview && (
            <div className="legal-overview">
              <h2 className="legal-overview-title">Overview</h2>
              <div className="legal-overview-body">
                {page.overview.map(renderBlock)}
              </div>
            </div>
          )}

          <ol className="legal-sections">
            {page.sections.map((section, idx) => (
              <li key={section.title} className="legal-section">
                <span className="legal-section-num">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="legal-section-content">
                  <h3 className="legal-section-title">{section.title}</h3>
                  <div className="legal-section-body">
                    {section.body.map(renderBlock)}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. Pre-Footer Call to Action Banner */}
        <CTABanner />
      </main>

      {/* 5. Global Footer */}
      <Footer />

      {/* 6. Admission Apply Modal */}
      <ApplyModal />
    </div>
  );
}
