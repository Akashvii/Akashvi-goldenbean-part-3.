import React from 'react';
import './about.css';
import cafePhoto from '../assets/images/cafe.jpg'; // ✅ Make sure this path is correct

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <p><strong>About Golden Bean Cafe</strong></p>
        <p>
          Welcome to Golden Bean Cafe, a cozy spot where great coffee meets warm hospitality. 
          Whether you're grabbing a quick espresso, relaxing with a handcrafted latte, 
          or enjoying fresh pastries and light bites, our café offers the perfect place to unwind, work, or catch up with friends. 
          We are passionate about quality, community, and creating a space that feels like home.
        </p>
      </div>

      <div className="about-photo">
        <img src={cafePhoto} alt="Cafe" />
      </div>
    </div>
  );
}