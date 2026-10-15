import React, { useState } from "react";
import "../../Styles/home/FAQSection.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item opened by default as seen in the reference picture

  const faqs = [
    {
      question: "1. What programmes are offered at Mother Terasa Arts & Science College?",
      answer:
        "We offer a wide range of Undergraduate and Postgraduate programmes across Arts, Science, Commerce, Computer Applications, Management, Data Science, and Hotel Management, designed to meet academic and industry requirements.",
    },
    {
      question: "2. How can I apply for admission?",
      answer:
        "You can apply online through our official portal by clicking the 'Apply Now' button, or visit our campus admissions office in person to obtain and submit the application form along with the required academic documents.",
    },
    {
      question: "3. Does the college provide placement assistance?",
      answer:
        "Yes, our dedicated Career Guidance and Placement Cell provides rigorous pre-placement training, resume building, interview workshops, and campus recruitment drives in partnership with over 500+ reputed companies.",
    },
    {
      question: "4. What facilities are available on campus?",
      answer:
        "Our campus features advanced computer and science laboratories, an extensive digital and physical library, spacious auditorium, modern cafeteria, hostel accommodations for boys and girls, and comprehensive sports infrastructure.",
    },
    {
      question: "5. Are scholarships available for students?",
      answer:
        "Yes, merit-based scholarships, sports scholarships, and government financial assistance schemes are available for eligible candidates. Our admission counselors can guide you through the scholarship application process.",
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="home-faq-section" id="faq">
      <div className="home-faq-container">
        {/* Section Header */}
        <div className="home-section-header">
          <h2 className="home-section-title">
            Frequently Asked <span className="highlight-maroon">Questions</span>
          </h2>
          <p className="home-section-subtitle">
            Find answers to common questions about our programs
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="home-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`home-faq-item ${isOpen ? "open" : ""}`}
                key={index}
              >
                <button
                  type="button"
                  className="home-faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="home-faq-question-text">{faq.question}</span>
                  <span className="home-faq-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {!isOpen && (
                        <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      )}
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="home-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
