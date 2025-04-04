import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateEntity.css"; // Import the CSS

const API_URL = "http://localhost:3000/api/handwriting"; // Adjust this if needed

const UpdateEntity = () => {
  const { id } = useParams(); // Get entry ID from the URL
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch the existing entry data when the component loads
  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          throw new Error("Entry not found");
        }
        const data = await response.json();
        setName(data.name);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    };

    fetchEntry();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      console.log("Entry updated successfully!");
      navigate("/"); // Redirect to home page after updating
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  return (
    <div className="container">
      <h2>Update Handwriting Entry</h2>
      <input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Entry</button>
    </div>
  );
};

export default UpdateEntity;
