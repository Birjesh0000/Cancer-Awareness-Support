import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Cancer Awareness & Support</h1>
        <p className="hero-subtitle">Empowering lives through education, support, and community</p>
        <p className="hero-description">
          Join us on a mission to bring hope, knowledge, and compassionate support to those affected by cancer. 
          Together, we can make a difference in the lives of millions.
        </p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🎓</span>
            <h3>Education</h3>
            <p>Learn from experts and access reliable medical information</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🤝</span>
            <h3>Support</h3>
            <p>Connect with counselors and support groups</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💪</span>
            <h3>Community</h3>
            <p>Share experiences with survivors and supporters</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
