import React, { useState } from 'react';
import Modal from 'react-modal';
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './AddPokemonModal.css';
import { NewPokemon } from '../../types';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddPokemon: (pokemon: NewPokemon) => void;
}

const AddPokemonModal: React.FC<Props> = ({ isOpen, onRequestClose, onAddPokemon }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [abilities, setAbilities] = useState('');
  const [weight, setWeight] = useState('');
  const [weaknesses, setWeaknesses] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPokemon({
      name,
      gender,
      type,
      abilities,
      weight: parseFloat(weight),
      weaknesses,
      imageUrl
    });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 2, maxWidth: 500, margin: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          Add New Pokémon
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Gender"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Abilities"
            value={abilities}
            onChange={(e) => setAbilities(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Weaknesses"
            value={weaknesses}
            onChange={(e) => setWeaknesses(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Image URL"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button onClick={onRequestClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add Pokémon
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddPokemonModal;
