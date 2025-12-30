import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Cancer Awareness & Support. All rights reserved.</p>
        <p>Supporting those affected by cancer through education and community.</p>
      </div>
    </footer>
  );
};

export default Footer;
