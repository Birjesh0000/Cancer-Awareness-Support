import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>CAS</h1>
        </div>
        <nav className="nav">
          <button onClick={() => handleScroll('contact')} className="nav-link">
            Contact
          </button>
          <button onClick={() => handleScroll('quotes')} className="nav-link">
            Inspiration
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
