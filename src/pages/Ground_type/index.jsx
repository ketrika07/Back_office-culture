import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Box, Alert } from '@mui/material';

function NewPage() {
 const [nom, setName] = useState('');
 const [message, setMessage] = useState('');
 const [severity, setSeverity] = useState('');

 const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://culture-application.up.railway.app/api/typesol', {
        nom,
      });

      console.log('Insert successful', response.data);
      setMessage('Insert successful');
      setSeverity('success');
    } catch (error) {
      console.error('Insert failed', error);
      setMessage(`Insert failed: ${error.message}`);
      setSeverity('error');
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
          value={nom}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Submit
        </Button>
        {message && <Alert severity={severity}>{message}</Alert>}
      </Box>
    </Container>
 );
}

export default NewPage;
