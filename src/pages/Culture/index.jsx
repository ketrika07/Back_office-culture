import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, MenuItem, TextField, Button, Container, Box } from '@mui/material';

function CultureForm() {
  const [name, setName] = useState('');
  const [seedQuantity, setSeedQuantity] = useState(0);
  const [yieldQuantity, setYieldQuantity] = useState(0);
  const [unit, setUnit] = useState(0);
  const [seedPrice, setSeedPrice] = useState(0);
  const [yieldPrice, setYieldPrice] = useState(0);
  const [Category, setCategory] = useState('');
  const [groundType, setGroundType] = useState('');
  const [cultureOptions, setCultureOptions] = useState([]);
  const [groundTypeOptions, setGroundTypeOptions] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        console.log('Categories fetched successfully', response.data);
        setCultureOptions(response.data);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };

    const fetchGroundTypes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/groundtypes');
        console.log('Ground types fetched successfully', response.data);
        setGroundTypeOptions(response.data);
      } catch (error) {
        console.error('Failed to fetch ground types', error);
      }
    };

    fetchCategory();
    fetchGroundTypes();
  }, []);

  const handleCultureSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/culture', {
        name,
        seedQuantity: Number(seedQuantity),
        yieldQuantity: Number(yieldQuantity),
        unit: Number(unit),
        seedPrice: Number(seedPrice),
        yieldPrice: Number(yieldPrice),
        Category,
        groundType,
      });

      console.log('Insert successful', response.data);
    } catch (error) {
      console.error('Insert failed', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box bgcolor="white" p={2} component="form" onSubmit={handleCultureSubmit}>
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="seedQuantity"
          label="Seed Quantity"
          name="seedQuantity"
          value={seedQuantity}
          onChange={(e) => setSeedQuantity(e.target.value)}
          type="number"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="yieldQuantity"
          label="Yield Quantity"
          name="yieldQuantity"
          value={yieldQuantity}
          onChange={(e) => setYieldQuantity(e.target.value)}
          type="number"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="unit"
          label="Unit"
          name="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          type="number"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="seedPrice"
          label="Seed Price"
          name="seedPrice"
          value={seedPrice}
          onChange={(e) => setSeedPrice(e.target.value)}
          type="number"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="yieldPrice"
          label="Yield Price"
          name="yieldPrice"
          value={yieldPrice}
          onChange={(e) => setYieldPrice(e.target.value)}
          type="number"
        />
        <Box display="flex" flexDirection="column" gap={2}>
          <Select
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {cultureOptions.map((option, index) => (
              <MenuItem key={index} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={groundType}
            onChange={(e) => setGroundType(e.target.value)}
          >
            {groundTypeOptions.map((option, index) => (
              <MenuItem key={index} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CultureForm;
