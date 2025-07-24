import React, { useEffect, useState } from 'react';

function PersonForm({ onSave, editingPerson }) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    if (editingPerson) {
      setName(editingPerson.name);
      setLastname(editingPerson.lastname);
    } else {
      setName('');
      setLastname('');
    }
  }, [editingPerson]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !lastname.trim()) {
      alert('Both first name and last name are required');
      return;
    }
    const person = editingPerson ? { ...editingPerson, name, lastname } : { name, lastname };
    onSave(person);
    setName('');
    setLastname('');
  };

  // Embedded styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '30px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f9f9f9',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
      fontWeight: '600',
      fontSize: '14px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    inputFocus: {
      borderColor: '#007BFF',
    },
    button: {
      padding: '12px 20px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    footerText: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#666',
      textAlign: 'center',
    },
    passwordInput: {
      marginTop: '10px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
    }
  };

  // For button hover effect using state
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName" style={styles.label}>First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter first name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="lastName" style={styles.label}>Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            style={styles.input}
          />

              https://placement.tut.ac.za/view-jobs
        </div>
        <button
          type="submit"
          style={{ ...styles.button, ...(btnHover ? styles.buttonHover : {}) }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          {editingPerson ? 'Update' : 'Add'}
        </button>
      </form>

      <p style={styles.footerText}>Hello</p>
      <input
        type="password"
        name="password"
        value="password"
        readOnly
        style={styles.passwordInput}
      />
      <p style={styles.footerText}>Hello Philippine</p>
      <input
        type="password"
        placeholder="Enter your password"
        style={styles.passwordInput}
      />
    </div>
  );
}

export default PersonForm;
