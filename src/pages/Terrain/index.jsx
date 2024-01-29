import React, { useState } from 'react';
import axios from 'axios';
import {TextField, Button, Container, Box } from '@mui/material';

// import '../styles.css';

function NewPage() {
  const [nom, setName] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Submitting:', { nom, pricePerUnit });

      const response = await axios.post('https://culture-application.up.railway.app/api/ressource', {
        nom,
        pricePerUnit,
      });

      console.log('Insert successful', response.data);
    } catch (error) {
      console.error('Insert failed', error);
    }
  };

  return (
    // <div className='dashboard-content'>
    //   <div className='dashboard-content-container'>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type='text'
    //         value={name}
    //         placeholder='Nom..'
    //         className='dashboard-content-input'
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <input
    //         type='number'
    //         value={pricePerUnit}
    //         placeholder='Prix..'
    //         className='dashboard-content-input'
    //         onChange={(e) => setPricePerUnit(e.target.value)}
    //       />
    //       <button type='submit' className='dashbord-header-btn'>
    //         Done
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box bgcolor="white" p={2} component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={nom}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="seedQuantity"
          label="Seed Quantity"
          name="seedQuantity"
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
          type="number"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Submit
        </Button>
      </Box>
    </Container>


  );
}

export default NewPage;
