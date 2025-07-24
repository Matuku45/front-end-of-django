import React, { useEffect, useState } from 'react';

function PersonForm({ onSave, editingPerson }) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    if (editingPerson) {
      setName(editingPerson.name);
      setLastname(editingPerson.lastname);
    }
  }, [editingPerson]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastname) {
      alert('Both fields are required');
      return;
    }
    const person = editingPerson ? { ...editingPerson, name, lastname } : { name, lastname };
    onSave(person);
    setName('');
    setLastname('');
  };

  return (

    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastname}
        onChange={e => setLastname(e.target.value)}
      />
      <button type="submit">{editingPerson ? 'Update' : 'Add'}</button>
    </form>

  <br/>
   <p> Hello </p>
    <input type= "password" name = "password" value = "password"/>
  <p>Hello philipine </p>
   <input type = "password">
  

  </div>


  );
}

export default PersonForm;
