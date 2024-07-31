import React, { useState } from 'react';
import Modal from 'react-modal';
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { default as ReactSelect, MultiValue } from 'react-select';
import './AddPokemonModal.css';
import { NewPokemon } from '../../types';
import { addPokemon } from '../../services/pokemonService';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddPokemon: (pokemon: NewPokemon) => void;
}

const abilityOptions = [
  { value: 'Static', label: 'Static' },
  { value: 'Blaze', label: 'Blaze' },
  { value: 'Overgrow', label: 'Overgrow' },
  { value: 'Torrent', label: 'Torrent' },
  { value: 'Cute Charm', label: 'Cute Charm' },
  { value: 'Pickup', label: 'Pickup' },
  { value: 'Damp', label: 'Damp' },
  { value: 'Immunity', label: 'Immunity' },
  { value: 'Run Away', label: 'Run Away' },
  { value: 'Levitate', label: 'Levitate' }
];

const AddPokemonModal: React.FC<Props> = ({ isOpen, onRequestClose, onAddPokemon }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [abilities, setAbilities] = useState<MultiValue<{ value: string; label: string }>>([]);
  const [weight, setWeight] = useState('');
  const [weaknesses, setWeaknesses] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPokemon: NewPokemon = {
      name,
      gender,
      type,
      abilities: abilities.map(a => a.value).join('/'),
      weight: parseFloat(weight),
      weaknesses,
      imageUrl
    };
    try {
      await addPokemon(newPokemon);
      onAddPokemon(newPokemon);
    } catch (error) {
      console.error("Error adding Pokemon:", error);
    }
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
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Type"
            >
              <MenuItem value="Electric">Electric</MenuItem>
              <MenuItem value="Fire">Fire</MenuItem>
              <MenuItem value="Grass">Grass</MenuItem>
              <MenuItem value="Water">Water</MenuItem>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Ghost">Ghost</MenuItem>
              <MenuItem value="Poison">Poison</MenuItem>
            </Select>
          </FormControl>
          <Box mt={2}>
            <Typography variant="body1" gutterBottom>
              Abilities
            </Typography>
            <ReactSelect
              isMulti
              value={abilities}
              onChange={(selected) => setAbilities(selected)}
              options={abilityOptions}
              className="react-select"
            />
          </Box>
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
