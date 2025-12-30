import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Cancer Awareness & Support</h1>
          <p>Empowering lives through education, support, and community</p>
          <p className="hero-subtitle">Together, we can make a difference</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
