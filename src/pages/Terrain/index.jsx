import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

function NewPage() {
  const [name, setName] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Submitting:', { name, pricePerUnit });

      const response = await axios.post('http://localhost:8080/api/ressource', {
        name,
        pricePerUnit,
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
          <input
            type='number'
            value={pricePerUnit}
            placeholder='Prix..'
            className='dashboard-content-input'
            onChange={(e) => setPricePerUnit(e.target.value)}
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
