"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
<<<<<<< HEAD
      <Link href="/" legacyBehavior>
        <a className="navbar-brand">SHumaila Waheed</a>
      </Link>

      <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link href="/" legacyBehavior>
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/#service" legacyBehavior>
          <a className="nav-link">Service</a>
        </Link>
        <Link href="/#about" legacyBehavior>
          <a className="nav-link">About</a>
        </Link>
        <Link href="/#portfolio" legacyBehavior>
          <a className="nav-link">Portfolio</a>
        </Link>
        <Link href="/#testimonial" legacyBehavior>
          <a className="nav-link">Testimonials</a>
        </Link>
        <Link href="/#blog" legacyBehavior>
          <a className="nav-link">Blog</a>
        </Link>
      </div>

      <button className="contact-btn">Contact</button>
      
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
=======
      <Link href="/" className="navbar-brand">SHumaila Waheed</Link>
      <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/#service" className="nav-link">Service</Link>
        <Link href="/#about" className="nav-link">About</Link>
        <Link href="/#portfolio" className="nav-link">Portfolio</Link>
        <Link href="/#testimonial" className="nav-link">Testimonials</Link>
        <Link href="/#blog" className="nav-link">Blog</Link>
      </div>
      <button className="contact-btn">Contact</button>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? '×' : '☰'}
>>>>>>> 29125ad (Enhanced Portfolio Styling)
      </div>
    </nav>
  );
};

export default Header;
