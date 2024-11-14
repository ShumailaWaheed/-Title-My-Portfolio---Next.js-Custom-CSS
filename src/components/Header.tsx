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
      </div>
    </nav>
  );
};

export default Header;
