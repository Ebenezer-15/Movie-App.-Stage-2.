import React from 'react';
import { FaSearch, FaFilm, FaBars } from 'react-icons/fa'; // Example icons


function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-icons">
          <div className="left-icon">
            {/* Movie icon */}
            <FaSearch size={30} />
          </div>
          <div className="search-bar">
            {/* Search bar */}
            <input type="text" placeholder="Search for movies..." />
          </div>
          <div className="right-icon">
            {/* Hamburger icon */}
            <FaBars size={30} />

          </div>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;
