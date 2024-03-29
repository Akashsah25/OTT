import React from 'react';
import "./style.scss"
import Img from '../lazyloading/LazyLoding';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='navbar'>
        <nav className="navbar_content">
          <div  className='logo_name'>
            <span>PlayBox</span>
          </div>
          <ul className="navbar__list">
            <li className="navbar__item"><Link to="/" className="navbar__link">Home</Link></li>
            <li className="navbar__item"><Link to="/movie" className="navbar__link">Movies</Link></li>
            <li className="navbar__item"><Link to="/tv" className="navbar__link">TV shows</Link></li>
            <li className="navbar__item"><Link to="/categories" className="navbar__link">Categories</Link></li>
          </ul>
          <div  className='search'>
            <Link to="/search">
            <Img src="https://static-00.iconduck.com/assets.00/search-icon-255x256-pucec0zs.png" alt="search" />
            </Link>
          </div>
          <div>
            <Link to="/user">
          <div  className='user'>
            <span>Akash</span>
          <div  className='user_img'>
            <Img src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg" alt="user" />
          </div>
          </div>
          </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
