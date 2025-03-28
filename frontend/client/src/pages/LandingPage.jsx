import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "../pages/LandingPage.css";
import RoastJoke from "../components/RoastJoke";
import { getHandwritingData } from "../services/handwritingService";

const LandingPage = ({ onShowJoke, showJoke, joke }) => {
  const [showAllData, setShowAllData] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [handwritingData, setHandwritingData] = useState([]); // Backend Data
  
  const dummyData = [
    { _id: 1, name: "John Doe", description: "Practicing cursive handwriting." },
    { _id: 2, name: "Jane Smith", description: "Learning calligraphy styles." },
    { _id: 3, name: "Alex Johnson", description: "Improving signature consistency." },
    { _id: 4, name: "Emily Brown", description: "Experimenting with artistic fonts." },
    { _id: 5, name: "Michael Lee", description: "Working on speed and accuracy." }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleGetHandwritingData = async () => {
    try {
      const data = await getHandwritingData();
      setHandwritingData(data);
    } catch (error) {
      console.error("Error fetching handwriting data:", error);
      alert("Failed to load handwriting entries. Check backend or network.");
    }
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* Navigation Bar */}
      <nav className="navbar">
          <li><Link to="/add-entity" className="add-entity-btn">➕ Add Entity</Link></li> {/* New Link Added */}
        <div className="logo">WriteRoast</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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

      {/* Backend Handwriting Data Section */}
      <section className="backend-handwriting">
        <h2>📜 Handwriting from Our Database</h2>
        <p>Discover unique handwriting styles from users worldwide.</p>

        <button className="get-handwriting-data-btn" onClick={handleGetHandwritingData}>
          🖋 Load Handwriting Entries
        </button>

        {/* Display Backend Data */}
        {handwritingData.length > 0 && (
          <div className="handwriting-card-section">
            <div className="handwriting-card-grid">
              {handwritingData.map((entry, index) => (
                <div key={index} className="entry-card">
                  <h3>{entry.name}</h3>
                  <p><strong>Description:</strong> {entry.description}</p>
                  <p><strong>Created at:</strong> {entry.createdAt}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <button className="fetch-data-btn" onClick={() => setShowAllData(true)}>Show More</button>
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

      {/* Footer */}
      <footer>
        <p>&copy; 2025 WriteRoast. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
