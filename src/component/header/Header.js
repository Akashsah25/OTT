// import React from "react";
// import "./style.scss";
// import Img from "../lazyloading/LazyLoding";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <div className="header">
//       <div className="navbar">
//         <nav className="navbar_content">
//           <div className="logo_name">
//             <span>PlayBox</span>
//           </div>
//           <ul className="navbar__list">
//             <li className="navbar__item">
//               <Link to="/" className="navbar__link">
//                 Home
//               </Link>
//             </li>
//             <li className="navbar__item">
//               <Link to="/movie" className="navbar__link">
//                 Movies
//               </Link>
//             </li>
//             <li className="navbar__item">
//               <Link to="/tv" className="navbar__link">
//                 TV shows
//               </Link>
//             </li>
//             <li className="navbar__item">
//               <Link to="/categories" className="navbar__link">
//                 Categories
//               </Link>
//             </li>
//           </ul>
//           <div className="search">
//             <Link to="/search">
//               <Img
//                 src="https://static-00.iconduck.com/assets.00/search-icon-255x256-pucec0zs.png"
//                 alt="search"
//               />
//             </Link>
//           </div>
//           <div>
//             <Link to="/user">
//               <div className="user">
//                 <span>Akash</span>
//                 <div className="user_img">
//                   <Img
//                     src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
//                     alt="user"
//                   />
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  {
    label: "Movies",
    href: "#",
    dropdown: ["Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Horror"],
  },
  {
    label: "TV Shows",
    href: "#",
    dropdown: [
      "New Releases",
      "Trending",
      "Originals",
      "Documentaries",
      "Anime",
    ],
  },
  { label: "Originals", href: "#" },
  { label: "Live", href: "#", badge: "LIVE" },
  { label: "My List", href: "#" },
];

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BellIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevron-icon">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const NOTIFICATIONS = [
  {
    id: 1,
    title: "New Episode Available",
    desc: "Season 3 of Dark Matter dropped",
    time: "2m ago",
    dot: true,
  },
  {
    id: 2,
    title: "Continue Watching",
    desc: "Pick up where you left off in Dune",
    time: "1h ago",
    dot: true,
  },
  {
    id: 3,
    title: "New Originals This Week",
    desc: "7 new titles added for you",
    time: "3h ago",
    dot: false,
  },
  {
    id: 4,
    title: "Top 10 in Your Region",
    desc: "Updated daily picks are ready",
    time: "Yesterday",
    dot: false,
  },
];

export default function OTTNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const searchRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  // Close all panels when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNotifOpen(false);
        setProfileOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleSearch = () => {
    setSearchOpen((v) => !v);
    if (searchOpen) setSearchValue("");
  };

  const handleNavHover = (label) => setActiveDropdown(label);
  const handleNavLeave = () => setActiveDropdown(null);

  return (
    <>
      {/* Backdrop blur overlay for mobile */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}

      <nav
        ref={navRef}
        className={`ott-navbar ${scrolled ? "ott-navbar--scrolled" : ""} ${mobileOpen ? "ott-navbar--mobile-open" : ""}`}>
        {/* Gradient line accent */}
        <div className="navbar-accent-line" />

        <div className="navbar-inner">
          {/* ── LOGO ── */}
          <Link to="/" className="navbar-logo" aria-label="StreamX Home">
            <span className="logo-mark">S</span>
            <span className="logo-text">
              TREAM<em>X</em>
            </span>
          </Link>

          {/* ── DESKTOP NAV LINKS ── */}
          <ul className="navbar-links" role="menubar">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className={`nav-item ${activeDropdown === link.label ? "nav-item--open" : ""} ${activeLink === link.label ? "nav-item--active" : ""}`}
                onMouseEnter={() => link.dropdown && handleNavHover(link.label)}
                onMouseLeave={handleNavLeave}
                role="none">
                <Link
                  to={link.href}
                  className="nav-link"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.label);
                  }}>
                  {link.label}
                  {link.badge && (
                    <span className="nav-badge">{link.badge}</span>
                  )}
                  {link.dropdown && <ChevronDown />}
                </Link>

                {link.dropdown && (
                  <div className="nav-dropdown" role="menu">
                    <div className="dropdown-inner">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item}
                          to="#"
                          className="dropdown-item"
                          role="menuitem"
                          onClick={(e) => e.preventDefault()}>
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* ── RIGHT ACTIONS ── */}
          <div className="navbar-actions">
            {/* Search */}
            <div
              className={`search-wrapper ${searchOpen ? "search-wrapper--open" : ""}`}>
              <button
                className="icon-btn"
                onClick={toggleSearch}
                aria-label="Toggle search"
                aria-expanded={searchOpen}>
                <SearchIcon />
              </button>
              <div className="search-expand">
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Titles, genres, people…"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  aria-label="Search"
                />
                {searchValue && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchValue("")}
                    aria-label="Clear search">
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Notifications */}
            <div className="popover-wrapper">
              <button
                className={`icon-btn notif-btn ${notifOpen ? "icon-btn--active" : ""}`}
                onClick={() => {
                  setNotifOpen((v) => !v);
                  setProfileOpen(false);
                }}
                aria-label="Notifications"
                aria-expanded={notifOpen}>
                <BellIcon />
                <span className="notif-dot" aria-hidden="true" />
              </button>

              {notifOpen && (
                <div
                  className="popover notif-popover"
                  role="dialog"
                  aria-label="Notifications">
                  <div className="popover-header">
                    <span>Notifications</span>
                    <button className="mark-read">Mark all read</button>
                  </div>
                  <ul className="notif-list">
                    {NOTIFICATIONS.map((n) => (
                      <li
                        key={n.id}
                        className={`notif-item ${n.dot ? "notif-item--unread" : ""}`}>
                        {n.dot && (
                          <span
                            className="unread-indicator"
                            aria-hidden="true"
                          />
                        )}
                        <div className="notif-content">
                          <p className="notif-title">{n.title}</p>
                          <p className="notif-desc">{n.desc}</p>
                          <span className="notif-time">{n.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="popover-wrapper">
              <button
                className={`profile-btn ${profileOpen ? "profile-btn--active" : ""}`}
                onClick={() => {
                  setProfileOpen((v) => !v);
                  setNotifOpen(false);
                }}
                aria-label="Profile menu"
                aria-expanded={profileOpen}>
                <div className="avatar">
                  <span>A</span>
                </div>
                <ChevronDown />
              </button>

              {profileOpen && (
                <div
                  className="popover profile-popover"
                  role="dialog"
                  aria-label="Profile menu">
                  <div className="profile-header">
                    <div className="avatar avatar--lg">
                      <span>A</span>
                    </div>
                    <div>
                      <p className="profile-name">Akash sah</p>
                      <p className="profile-plan">StreamX Premium</p>
                    </div>
                  </div>
                  <ul className="profile-menu">
                    {[
                      "Manage Profiles",
                      "Account Settings",
                      "Parental Controls",
                      "Help Center",
                      "Redeem Code",
                    ].map((item) => (
                      <li key={item}>
                        <Link to="#" onClick={(e) => e.preventDefault()}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="profile-footer">
                    <Link
                      to="#"
                      className="signout-btn"
                      onClick={(e) => e.preventDefault()}>
                      Sign Out
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger (mobile) */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <div
          className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : ""}`}
          aria-hidden={!mobileOpen}>
          <ul className="mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="mobile-link-item">
                <Link
                  to={link.href}
                  className={`mobile-link ${activeLink === link.label ? "mobile-link--active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.label);
                    setMobileOpen(false);
                  }}>
                  {link.label}
                  {link.badge && (
                    <span className="nav-badge">{link.badge}</span>
                  )}
                </Link>
                {link.dropdown && (
                  <div className="mobile-sub">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        to="#"
                        className="mobile-sub-link"
                        onClick={(e) => e.preventDefault()}>
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
