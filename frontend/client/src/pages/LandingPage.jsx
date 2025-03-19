import React, { useState } from "react";
import "../pages/LandingPage.css";
import RoastJoke from "../components/RoastJoke";

const LandingPage = ({ onShowJoke, showJoke, joke }) => {
  const [showAllData, setShowAllData] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sample Random Data
  const dummyData = [
    { _id: 1, name: "John Doe", description: "Practicing cursive handwriting." },
    { _id: 2, name: "Jane Smith", description: "Learning calligraphy styles." },
    { _id: 3, name: "Alex Johnson", description: "Improving signature consistency." },
    { _id: 4, name: "Emily Brown", description: "Experimenting with artistic fonts." },
    { _id: 5, name: "Michael Lee", description: "Working on speed and accuracy." }
  ];

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">WriteRoast</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to WriteRoast</h2>
        <p>The best platform to improve your writing skills and get expert feedback.</p>
        <button onClick={onShowJoke}>Get a Roast Joke</button>
      </section>

      {/* Roast Joke Section */}
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

      {/* Data from Random Dummy Data */}
      <section className="database-data">
        <h2>Recent Handwriting Entries</h2>
        <div className="entries-container">
          {dummyData.slice(0, 3).map((entity) => (
            <div key={entity._id} className="entry-card">
              <h3>{entity.name}</h3>
              <p>{entity.description}</p>
            </div>
          ))}
        </div>

        {/* Button to Show All Data */}
        <button className="fetch-data-btn" onClick={() => setShowAllData(true)}>Show All Data</button>

        {/* Display All Data When Button is Clicked */}
        {showAllData && (
          <section className="all-data-section">
            <h2>All Handwriting</h2>
            <div className="all-entries-container">
              {dummyData.map((entity) => (
                <div key={entity._id} className="entry-card">
                  <h3>{entity.name}</h3>
                  <p>{entity.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 WriteRoast. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
