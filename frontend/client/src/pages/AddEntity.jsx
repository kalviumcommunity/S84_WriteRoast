import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import './AddEntity.css';

function AddEntity() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/entities")
      .then((res) => res.json())
      .then((data) => setEntities(data))
      .catch((error) => console.error("Error fetching entities:", error));
  }, []);

  const handleEntityAdded = (newEntity) => {
    setEntities([...entities, newEntity]);
  };

  return (
    <div className="add-entity-container">
      <h1 className="add-entity-title">Entity Management</h1>
      <Form onEntityAdded={handleEntityAdded} />

      <h3 className="entity-list-title">Entities List:</h3>
      {entities.length > 0 ? (
        <ul className="entity-list">
          {Array.isArray(entities) && entities.map((entity) => (
            <li key={entity._id} className="entity-item">
              <strong>{entity.name}</strong>: {entity.description}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-entities-message">No entities found...</p>
      )}
    </div>
  );
}

export default AddEntity;
