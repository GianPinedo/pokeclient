import React from 'react';
import './PokemonFilters.css';

interface Props {
  onFilterChange: (filters: { type: string; ability: string; gender: string }) => void;
}

const PokemonFilters: React.FC<Props> = ({ onFilterChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const [filters, setFilters] = React.useState({ type: '', ability: '', gender: '' });

  React.useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  return (
    <div className="filters">
      <select name="type" onChange={handleFilterChange}>
        <option value="">All Types</option>
        <option value="Electric">Electric</option>
        <option value="Fire">Fire</option>
        <option value="Grass">Grass</option>
        <option value="Water">Water</option>
        <option value="Normal">Normal</option>
        <option value="Ghost">Ghost</option>
        <option value="Poison">Poison</option>
      </select>
      <select name="ability" onChange={handleFilterChange}>
        <option value="">All Abilities</option>
        <option value="Static">Static</option>
        <option value="Blaze">Blaze</option>
        <option value="Overgrow">Overgrow</option>
        <option value="Torrent">Torrent</option>
        <option value="Cute Charm">Cute Charm</option>
        <option value="Pickup">Pickup</option>
        <option value="Damp">Damp</option>
        <option value="Immunity">Immunity</option>
        <option value="Run Away">Run Away</option>
        <option value="Levitate">Levitate</option>
      </select>
      <select name="gender" onChange={handleFilterChange}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default PokemonFilters;
