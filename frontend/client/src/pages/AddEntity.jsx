import { useState, useEffect } from "react";
import './AddEntity.css';

const API_URL = "http://localhost:3000/api/handwriting"; // Update this if needed

const AddEntity = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [entries, setEntries] = useState([]); // Store entries
  const [editingId, setEditingId] = useState(null); // Track the entry being edited

  useEffect(() => {
    fetchEntries(); // Load entries when component mounts
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch entries");
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  const handleAddOrUpdate = async () => {
    try {
      if (editingId) {
        // Update existing entry
        const response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, description }),
        });

        if (!response.ok) throw new Error("Failed to update entry");
        setEditingId(null);
      } else {
        // Add new entry
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, description }),
        });

        if (!response.ok) throw new Error("Failed to add entry");
      }

      setName("");
      setDescription("");
      fetchEntries(); // Refresh the list after adding/updating
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Delete failed");

      fetchEntries(); // Refresh the list after deleting
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const handleEdit = (entry) => {
    setName(entry.name);
    setDescription(entry.description);
    setEditingId(entry._id);
  };

  return (
    <div>
      <h2>{editingId ? "Update Entry" : "Add Handwriting Entry"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editingId ? "Update Entry" : "Add Entry"}
      </button>

      <h2>All Entries</h2>
      {entries.length > 0 ? (
        <ul>
          {entries.map((entry) => (
            <li key={entry._id}>
              <strong>{entry.name}</strong>: {entry.description}
              <button onClick={() => handleEdit(entry)}>Update</button>
              <button onClick={() => handleDelete(entry._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No entries found</p>
      )}
    </div>
  );
};

export default AddEntity;
