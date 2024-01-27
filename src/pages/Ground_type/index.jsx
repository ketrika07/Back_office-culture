import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

function NewPage() {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/groundtype', {
        name,
      });

      console.log('Insert successful', response.data);
    } catch (error) {
      console.error('Insert failed', error);
    }
  };

  return (
    <div className='dashboard-content'>
      <div className='dashboard-content-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={name}
            placeholder='Nom..'
            className='dashboard-content-input'
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='dashbord-header-btn'>
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPage;
