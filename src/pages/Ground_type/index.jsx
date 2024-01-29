// import React, { useState } from 'react';
// import axios from 'axios';
// import {TextField, Button, Container, Box } from '@mui/material';

// // import '../styles.css';

// function NewPage() {
//   const [name, setName] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/groundtype', {
//         name,
//       });

//       console.log('Insert successful', response.data);
//     } catch (error) {
//       console.error('Insert failed', error);
//     }
//   };

//   return (
//     // <div className='dashboard-content'>
//     //   <div className='dashboard-content-container'>
//     //     <form onSubmit={handleSubmit}>
//     //       <input
//     //         type='text'
//     //         value={name}
//     //         placeholder='Nom..'
//     //         className='dashboard-content-input'
//     //         onChange={(e) => setName(e.target.value)}
//     //       />
//     //       <button type='submit' className='dashbord-header-btn'>
//     //         Done
//     //       </button>
//     //     </form>
//     //   </div>
//     // </div>
//   );
// }

// export default NewPage;

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Box } from '@mui/material';

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
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box bgcolor="white" p={2} component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default NewPage;
