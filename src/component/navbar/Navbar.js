// import React from 'react';
// import "./style.scss"

// export default function Navbar() {
//   return (
//     <div className='navbar'>
//       <nav className="navbar_item">
//         <ul className="navbar__list">
//           <li className="navbar__item"><a to="#" className="navbar__link">Home</a></li>
//           <li className="navbar__item"><a to="#" className="navbar__link">About</a></li>
//           <li className="navbar__item"><a to="#" className="navbar__link">Services</a></li>
//           <li className="navbar__item"><a to="#" className="navbar__link">Contact</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

import React from "react";
import "./style.scss";

const Navbar = () => {
  return React.createElement(
    "nav",
    { className: "navbar" },
    React.createElement(
      "div",
      { className: "navbar__container" },

      // Left - Logo
      React.createElement(
        "div",
        { className: "navbar__logo" },
        React.createElement("span", { className: "logo-text" }, "CINE"),
      ),

      // Center - Navigation Links
      React.createElement(
        "ul",
        { className: "navbar__list" },
        React.createElement(
          "li",
          { className: "navbar__item" },
          React.createElement(
            "a",
            { href: "#", className: "navbar__link" },
            "Home",
          ),
        ),
        React.createElement(
          "li",
          { className: "navbar__item" },
          React.createElement(
            "a",
            { href: "#", className: "navbar__link" },
            "Trending",
          ),
        ),
        React.createElement(
          "li",
          { className: "navbar__item" },
          React.createElement(
            "a",
            { href: "#", className: "navbar__link" },
            "Movies",
          ),
        ),
        React.createElement(
          "li",
          { className: "navbar__item" },
          React.createElement(
            "a",
            { href: "#", className: "navbar__link" },
            "TV Shows",
          ),
        ),
        React.createElement(
          "li",
          { className: "navbar__item" },
          React.createElement(
            "a",
            { href: "#", className: "navbar__link" },
            "Upcoming",
          ),
        ),
      ),

      // Right Side - Icons + Profile
      React.createElement(
        "div",
        { className: "navbar__right" },
        React.createElement(
          "button",
          { className: "navbar__icon-btn" },
          "🔍", // Search Icon
        ),
        React.createElement(
          "button",
          { className: "navbar__icon-btn" },
          "🛎️", // Notifications
        ),
        React.createElement(
          "div",
          { className: "navbar__profile" },
          React.createElement("img", {
            src: "https://via.placeholder.com/40", // Replace with your profile image later
            alt: "Profile",
            className: "profile-img",
          }),
        ),
      ),
    ),
  );
};

export default Navbar;
