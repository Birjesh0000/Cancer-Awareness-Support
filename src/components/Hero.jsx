import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner">
        <div className="hero-banner-gradient"></div>
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Cancer Awareness & Support</h1>
          <p className="hero-subtitle">Empowering lives through education, support, and community</p>
          <p className="hero-description">
            Join us on a mission to bring hope, knowledge, and compassionate support to those affected by cancer. 
            Together, we can make a difference in the lives of millions.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🎓</span>
              <p>Education</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🤝</span>
              <p>Support</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💪</span>
              <p>Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
