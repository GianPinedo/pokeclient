import React from 'react';
import './PokemonFilters.css';

interface Props {
  onFilterChange: (filters: { type: string; ability: string; gender: string }) => void;
}

const PokemonFilters: React.FC<Props> = ({ onFilterChange }) => {
  const [filters, setFilters] = React.useState({ type: '', ability: '', gender: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  React.useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  return (
    <div className="filters-container">
      <div className="filter">
        <label htmlFor="type">Type</label>
        <select name="type" id="type" onChange={handleFilterChange}>
          <option value="">All Types</option>
          <option value="Electric">Electric</option>
          <option value="Fire">Fire</option>
          <option value="Grass">Grass</option>
          <option value="Water">Water</option>
          <option value="Normal">Normal</option>
          <option value="Ghost">Ghost</option>
          <option value="Poison">Poison</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="ability">Ability</label>
        <select name="ability" id="ability" onChange={handleFilterChange}>
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
      </div>
      <div className="filter">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={handleFilterChange}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default PokemonFilters;
