import React, { useEffect, useState } from 'react';
import PersonForm from './PersonForm';

const API_BASE = 'https://django-swagger-8.onrender.com/api';

function App() {
  const [people, setPeople] = useState([]);
  const [editingPerson, setEditingPerson] = useState(null);

  // Fetch people on load
  useEffect(() => {
    fetch(`${API_BASE}/people/`)
      .then(res => res.json())
      .then(data => setPeople(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_BASE}/people/${id}/`, {
      method: 'DELETE'
    }).then(() => {
      setPeople(prev => prev.filter(p => p.id !== id));
    });
  };

  const handleSave = (person) => {
    if (person.id) {
      // Update
      fetch(`${API_BASE}/people/${person.id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person)
      }).then(() => {
        setPeople(prev => prev.map(p => p.id === person.id ? person : p));
        setEditingPerson(null);
      });
    } else {
      // Add
      fetch(`${API_BASE}/people/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person)
      })
        .then(res => res.json())
        .then(newPerson => {
          setPeople(prev => [...prev, { ...person, id: newPerson.id }]);
        });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>People</h2>
      <PersonForm onSave={handleSave} editingPerson={editingPerson} />
      <ul>
        {people.map(person => (
          <li key={person.id}>
            {person.name} {person.lastname}
            <button onClick={() => setEditingPerson(person)}>Edit</button>
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
