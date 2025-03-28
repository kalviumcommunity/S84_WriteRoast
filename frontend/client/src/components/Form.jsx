import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({ onEntityAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEntity = { name, description };

    try {
      const response = await fetch("http://localhost:3000/api/entities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntity),
      });

      if (response.ok) {
        const addedEntity = await response.json();
        onEntityAdded(addedEntity);
        setName("");
        setDescription("");
      } else {
        console.error("Failed to add entity");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Back Button Outside Form Container */}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div className="form-container">
        <h2 className="form-title">Add New Entity</h2>
        <form className="entity-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="form-button">Add Entity</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
