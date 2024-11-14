'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import banner from '/public/images/profile-01.png';

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = contentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          element.classList.add('animate-slide-right');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-row">
        <div className="home-content hidden-on-load" ref={contentRef}>
          <h2 className="home-heading">
            Hello! I Am <br />
            <span className="highlight-text">Shumaila Waheed</span>
          </h2>
          <p className="home-description">
            I&apos;m a Web Developer with 2 years of experience, specializing in creating fully responsive websites, including backend development.
          </p>
          <button className="h-btn">Hire Me</button>
        </div>
        <div className="home-image-container">
          <Image src={banner} className="home-image" alt="Shumaila's Portfolio Banner" />
        </div>
      </div>
    </section>
  );
};

export default Home;
