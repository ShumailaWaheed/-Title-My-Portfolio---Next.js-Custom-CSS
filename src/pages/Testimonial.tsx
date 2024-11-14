"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "This product has changed my life for the better. The service provided was exceptional, and I highly recommend them to anyone looking for quality.",
    name: "Kevin Andrew",
    position: "CEO of Innovative Solutions",
  },
  {
    text: "The team's attention to detail and commitment to excellence exceeded my expectations. I am extremely satisfied with the results.",
    name: "Sarah Johnson",
    position: "Product Manager at TechWave",
  },
  {
    text: "Amazing experience from start to finish! Professional, reliable, and delivered above and beyond what I envisioned. Highly recommended.",
    name: "David Clark",
    position: "Creative Director at DesignHub",
  },
  {
    text: "The project was completed on time and within budget. The quality of work and the dedication shown were truly impressive.",
    name: "Laura Williams",
    position: "Operations Manager at GreenTech",
  },
  {
    text: "Outstanding service! The team was highly skilled, responsive, and a pleasure to work with. I look forward to future projects together.",
    name: "Michael Brown",
    position: "Founder of Startup Sphere",
  },
  {
    text: "A fantastic team to work with! Their creativity, problem-solving abilities, and communication skills made the project a huge success.",
    name: "Emma Davis",
    position: "Marketing Lead at Brandify",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-container">
        <div className="image-section">
          <Image
            src="/images/peoples.png"
            alt="Testimonial"
            width={500}
            height={500}
            className="img-fluid"
          />
        </div>
        <div className="testimonial-content">
          <div className="heading">
            <small>Testimonials</small>
            <h3>Happy Clients Feedback</h3>
            <div className="testimonial-content">
              <p>{testimonials[currentIndex].text}</p>
              <h4>{testimonials[currentIndex].name}</h4>
              <small>{testimonials[currentIndex].position}</small>
            </div>
            <div className="controls">
              <button
                className="prev-btn"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="next-btn"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
