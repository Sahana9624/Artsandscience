import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { useApply } from "../../Context/ApplyContext";
import "../../Styles/home/Header.css";
import { lockScroll, unlockScroll } from "../../Hooks/scrollLock";

export default function Header({ activePage = "home", activeSubPage = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState({
    about: false,
    academics: false,
    departments: false,
    life: false,
    clubs: false,
    committees: false,
    accreditation: false,
  });
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setApplyOpen } = useApply ? useApply() : { setApplyOpen: () => {} };
  const location = useLocation ? useLocation() : { pathname: "/", hash: "" };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling on page load/route change
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const elem = document.getElementById(hashId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);

  // Lock background scroll when mobile navigation dropdown is active (in mobile view only) without disturbing layout
  useEffect(() => {
    // Only lock background scroll in mobile view (<= 1024px) when mobile navigation is open
    const isMobile = window.innerWidth <= 1024;
    if (!mobileMenuOpen || !isMobile) return;

    lockScroll();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      unlockScroll();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  // Block background scroll while a desktop dropdown is hovered (desktop view only).
  // Wheel/key events are cancelled instead of setting overflow: hidden, so the
  // scrollbar doesn't disappear and shift the layout on every hover.
  useEffect(() => {
    if (!desktopDropdownOpen || window.innerWidth <= 1024) return;

    const SCROLL_KEYS = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];

    const handleWheel = (e) => {
      // Let long flyout lists scroll; overscroll-behavior keeps it from chaining to the page
      if (e.target.closest && e.target.closest(".home-flyout-menu")) return;
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;
      if (SCROLL_KEYS.includes(e.key)) e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [desktopDropdownOpen]);

  // Close mobile navigation on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileSub = (key) => {
    setMobileSubOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleItemClick = (e, targetTo) => {
    setMobileMenuOpen(false);

    if (targetTo && targetTo.includes("#")) {
      const [path, hash] = targetTo.split("#");
      const currentPath = window.location.pathname;
      if (currentPath === path || (path === "/" && (currentPath === "" || currentPath === "/"))) {
        const el = document.getElementById(hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }
  };

  const navLinks = [
    { label: "Home", to: "/", id: "home" },
    {
      label: "About Us",
      id: "about",
      isDropdown: true,
      dropdownKey: "about",
      items: [
        { label: "About MTCAS", to: "/about", subId: "about-mtcas" },
        { label: "Code of Conduct", to: "/about#code-of-conduct", subId: "code-of-conduct" },
      ],
    },
    {
      label: "Academics",
      id: "academics",
      isDropdown: true,
      dropdownKey: "academics",
      items: [
        { label: "UG Programs", to: "/academic", subId: "ug" },
        { label: "PG Programs", to: "/academics/pg", subId: "pg" },
        { label: "Academic Research", to: "/academics/research", subId: "research" },
        {
          label: "Academic Calendar 2026 – 27",
          // Downloads the PDF directly; replace the file in public/documents/ to update it
          to: "/documents/academic-calendar-2026-27.pdf",
          download: "Academic-Calendar-2026-27.pdf",
          subId: "calendar",
        },
      ],
    },
    {
      label: "Departments",
      id: "departments",
      isDropdown: true,
      dropdownKey: "departments",
      items: [
        { label: "Arts Departments", to: "/departments/arts", subId: "arts" },
        { label: "Management Departments", to: "/departments/management", subId: "management" },
        { label: "Science Departments", to: "/departments/science", subId: "science" },
      ],
    },
    {
      label: "Life@MTCAS",
      id: "life",
      isDropdown: true,
      dropdownKey: "life",
      items: [
        { label: "Facilities", to: "/facilities", subId: "facilities" },
        { label: "News & Events", to: "/news-events", subId: "news-events" },
        { label: "Gallery", to: "/gallery", subId: "gallery" },
        {
          label: "Club Activities",
          to: "/clubs/rrc",
          subId: "clubs",
          hasChevron: true,
          flyoutKey: "clubs",
          subItems: [
            { label: "Red Ribbon Club", to: "/clubs/rrc", id: "rrc" },
            { label: "National Service Scheme (NSS)", to: "/clubs/nss", id: "nss" },
            { label: "Youth Red Cross (YRC)", to: "/clubs/yrc", id: "yrc" },
            { label: "Public Relationship Officer (PRO)", to: "/clubs/pro", id: "pro" },
            { label: "Alumni Association", to: "/clubs/alumni", id: "alumni" },
            { label: "Cultural Club", to: "/clubs/cultural", id: "cultural" },
            { label: "Yoga Club", to: "/clubs/yoga", id: "yoga" },
            { label: "Eco Club", to: "/clubs/eco", id: "eco" },
          ],
        },
        {
          label: "Committees & Cells",
          to: "/committees/anti-ragging",
          subId: "committees",
          hasChevron: true,
          flyoutKey: "committees",
          subItems: [
            { label: "Anti Ragging Committee", to: "/committees/anti-ragging", id: "anti-ragging" },
            { label: "Grievance & Redressal Cell", to: "/committees/grievance", id: "grievance" },
            { label: "Placement Cell", to: "/committees/placement", id: "placement" },
            { label: "Entrepreneurship Development Cell", to: "/committees/edc", id: "edc" },
            { label: "Disciplinary Action Committee", to: "/committees/disciplinary", id: "disciplinary" },
            { label: "Students Grievance Redressal Cell", to: "/committees/students-grievance", id: "students-grievance" },
            { label: "Green Campus Initiative Cell", to: "/committees/green-campus", id: "green-campus" },
            { label: "Career Guidance Cell", to: "/committees/career-guidance", id: "career-guidance" },
            { label: "Anti Drug Awareness Committee", to: "/committees/anti-drug", id: "anti-drug" },
            { label: "Institution’s Innovation Cell (IIC)", to: "/committees/iic", id: "iic" },
            { label: "Research & Development Cell", to: "/committees/research", id: "research" },
            { label: "Women Harassment Cell", to: "/committees/women-harassment", id: "women-harassment" },
          ],
        },
      ],
    },
    {
      label: "Accreditations",
      id: "accreditation",
      isDropdown: true,
      dropdownKey: "accreditation",
      items: [
        { label: "IQAC", to: "/accreditation/iqac", subId: "iqac" },
        { label: "IIQA", to: "/accreditation/iiqa", subId: "iiqa" },
        { label: "SSR", to: "/accreditation/ssr", subId: "ssr" },
      ],
    },
    { label: "Contact Us", to: "/contact", id: "contact" },
  ];

  return (
    <header className={`home-header ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="home-header-container">
        {/* Brand Logo */}
        <Link to="/" className="home-brand">
          <img src={logoImg} alt="Mother Terasa College" className="home-brand-logo" />
          <div className="home-brand-text">
            <span className="brand-title">MOTHER TERASA</span>
            <span className="brand-subtitle">College of Arts &amp; Science</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="home-nav-desktop">
          {navLinks.map((link) => {
            const isActive =
              activePage === link.id ||
              (link.id === "life" &&
                (activePage === "facilities" ||
                  activePage === "news-events" ||
                  activePage === "gallery" ||
                  activePage === "clubs" ||
                  activePage === "committees" ||
                  activePage === "life"));

            if (link.isDropdown) {
              return (
                <div
                  key={link.label}
                  className="home-nav-dropdown-wrapper"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  {/* Non-clickable trigger label */}
                  <span
                    className={`home-nav-link home-dropdown-trigger ${isActive ? "active" : ""}`}
                    tabIndex={0}
                  >
                    {link.label}
                  </span>

                  {/* Dropdown Menu Popup - shown strictly on hover */}
                  <div className="home-dropdown-menu">
                    {link.items.map((item) => {
                      const hasActiveChild =
                        item.subItems &&
                        item.subItems.some(
                          (sub) =>
                            location.pathname === sub.to ||
                            activeSubPage === sub.id ||
                            (sub.to && location.pathname.startsWith(sub.to))
                        );

                      const isItemActive =
                        hasActiveChild ||
                        activeSubPage === item.subId ||
                        activeSubPage === item.flyoutKey ||
                        (activePage === link.id &&
                          ((link.dropdownKey === "about" && item.subId === "about-mtcas" && !activeSubPage) ||
                            (link.dropdownKey === "academics" && item.subId === "ug" && !activeSubPage) ||
                            (link.dropdownKey === "departments" && item.subId === "science" && !activeSubPage) ||
                            (link.dropdownKey === "life" && item.subId === "facilities" && !activeSubPage) ||
                            (link.dropdownKey === "accreditation" && item.subId === "iqac" && !activeSubPage)));

                      // Item with flyout submenu (like Clubs or Committees & Cells)
                      if (item.subItems && item.hasChevron) {
                        return (
                          <div key={item.label} className="home-dropdown-flyout-wrapper">
                            <Link
                              to={item.to}
                              className={`home-dropdown-item ${isItemActive ? "active" : ""}`}
                              onClick={(e) => e.preventDefault()}
                            >
                              <span>{item.label}</span>
                              <svg
                                className="home-dropdown-item-arrow"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </Link>

                            {/* Flyout Submenu Container - strictly on hover of this item */}
                            <div className="home-flyout-menu">
                              {item.subItems.map((sub) => {
                                const isSubActive =
                                  location.pathname === sub.to ||
                                  activeSubPage === sub.id;

                                return (
                                  <Link
                                    key={sub.label}
                                    to={sub.to}
                                    className={`home-dropdown-item home-flyout-item ${isSubActive ? "active" : ""}`}
                                    onClick={(e) => handleItemClick(e, sub.to)}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }

                      // File download (e.g. Academic Calendar PDF)
                      if (item.download) {
                        return (
                          <a
                            key={item.label}
                            href={item.to}
                            download={item.download}
                            className="home-dropdown-item"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                          </a>
                        );
                      }

                      // Standard dropdown link
                      return (
                        <Link
                          key={item.label}
                          to={item.to}
                          className={`home-dropdown-item ${isItemActive ? "active" : ""}`}
                          onClick={(e) => handleItemClick(e, item.to)}
                        >
                          <span>{item.label}</span>
                          {item.hasChevron && (
                            <svg
                              className="home-dropdown-item-arrow"
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`home-nav-link ${isActive ? "active" : ""}`}
                onClick={(e) => handleItemClick(e, link.to)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Apply Now Action */}
        <div className="home-header-actions">
          <button
            type="button"
            className="home-apply-btn"
            onClick={() => (setApplyOpen ? setApplyOpen(true) : null)}
          >
            Apply Now
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className={`home-hamburger ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`home-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="home-nav-mobile">
          {navLinks.map((link) => {
            const isActive =
              activePage === link.id ||
              (link.id === "life" &&
                (activePage === "facilities" ||
                  activePage === "news-events" ||
                  activePage === "gallery"));

            if (link.isDropdown) {
              const isSubOpen = !!mobileSubOpen[link.dropdownKey];

              return (
                <div key={link.label} className="home-mobile-dropdown-group">
                  <button
                    type="button"
                    className={`home-mobile-link home-mobile-dropdown-btn ${isActive ? "active" : ""}`}
                    onClick={() => toggleMobileSub(link.dropdownKey)}
                  >
                    <span>{link.label}</span>
                    <span className={`home-mobile-chevron ${isSubOpen ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>

                  {isSubOpen && (
                    <div className="home-mobile-sublinks">
                      {link.items.map((item) => {
                        const hasActiveChild =
                          item.subItems &&
                          item.subItems.some(
                            (sub) =>
                              location.pathname === sub.to ||
                              activeSubPage === sub.id ||
                              (sub.to && location.pathname.startsWith(sub.to))
                          );

                        const isItemActive =
                          hasActiveChild ||
                          activeSubPage === item.subId ||
                          activeSubPage === item.flyoutKey;

                        if (item.subItems) {
                          const isNestedOpen = !!mobileSubOpen[item.flyoutKey];

                          return (
                            <div key={item.label} className="home-mobile-nested-group">
                              <button
                                type="button"
                                className={`home-mobile-sublink home-mobile-sublink-btn ${
                                  isItemActive ? "active" : ""
                                }`}
                                onClick={() => toggleMobileSub(item.flyoutKey)}
                              >
                                <span>{item.label}</span>
                                <span className={`home-mobile-chevron ${isNestedOpen ? "open" : ""}`}>
                                  ▾
                                </span>
                              </button>

                              {isNestedOpen && (
                                <div className="home-mobile-nested-sublinks">
                                  {item.subItems.map((sub) => {
                                    const isSubActive =
                                      location.pathname === sub.to ||
                                      activeSubPage === sub.id;

                                    return (
                                      <Link
                                        key={sub.label}
                                        to={sub.to}
                                        className={`home-mobile-sublink home-mobile-sub-item ${
                                          isSubActive ? "active" : ""
                                        }`}
                                        onClick={(e) => handleItemClick(e, sub.to)}
                                      >
                                        {sub.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        }

                        if (item.download) {
                          return (
                            <a
                              key={item.label}
                              href={item.to}
                              download={item.download}
                              className="home-mobile-sublink"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={item.label}
                            to={item.to}
                            className={`home-mobile-sublink ${isItemActive ? "active" : ""}`}
                            onClick={(e) => handleItemClick(e, item.to)}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`home-mobile-link ${isActive ? "active" : ""}`}
                onClick={(e) => handleItemClick(e, link.to)}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            className="home-apply-btn-mobile"
            onClick={() => {
              setMobileMenuOpen(false);
              if (setApplyOpen) setApplyOpen(true);
            }}
          >
            Apply Now
          </button>
        </nav>
      </div>
    </header>
  );
}
