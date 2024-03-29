import React from 'react';
import "./style.scss"


export default function Navbar() {
  return (
    <div className='navbar'>
      <nav className="navbar_item">
        <ul className="navbar__list">
          <li className="navbar__item"><a to="#" className="navbar__link">Home</a></li>
          <li className="navbar__item"><a to="#" className="navbar__link">About</a></li>
          <li className="navbar__item"><a to="#" className="navbar__link">Services</a></li>
          <li className="navbar__item"><a to="#" className="navbar__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
