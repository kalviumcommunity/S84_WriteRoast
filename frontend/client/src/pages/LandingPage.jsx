import React from "react";
import "../pages/LandingPage.css";
import RoastJoke from "../components/RoastJoke";

const LandingPage = ({ onShowJoke, showJoke, joke }) => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">WriteRoast</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to WriteRoast</h2>
        <p>The best platform to improve your writing skills and get expert feedback.</p>
        <button onClick={onShowJoke}>Get a Roast Joke</button>
      </section>

      {/* Roast Joke Section */}
      {/* Animated Arrow */}
      {showJoke && (
       <div className="arrow-container">
        <span className="arrow">↓</span>
        </div>
         )}
      {showJoke && (
        <section className="roast-joke-section">
          <RoastJoke joke={joke} />
        </section>
      )}

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose WriteRoast?</h2>
        <p>Explore the amazing features that make WriteRoast the perfect choice for writers.</p>

        <div className="features-container">
          <div className="feature-card">
            <h3>AI-Powered Feedback</h3>
            <p>Get instant, AI-driven suggestions to enhance your writing.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Reviews</h3>
            <p>Receive insights from professional writers and editors.</p>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>Join a thriving community of passionate writers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 WriteRoast. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
