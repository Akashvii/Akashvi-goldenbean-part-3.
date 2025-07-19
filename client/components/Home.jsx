// components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/index.css'; // import css

export default function Home() {
  const navigate = useNavigate();

  const handleAboutRedirect = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      {/* Welcome Message */}
      <h2>Welcome to Golden Bean Cafe</h2>
      {/* Mission Statement */}
      <p>
        A cozy place for coffee lovers to enjoy the finest brews and pastries.
      </p>
      {/* Button redirect to About page */}
      <button onClick={handleAboutRedirect} className="about-button">
        Learn More About Us
      </button>
    </div>
  );
}
