import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to WriteRoast</h2>
        <p>The best platform to improve your writing skills and get expert feedback.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
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
