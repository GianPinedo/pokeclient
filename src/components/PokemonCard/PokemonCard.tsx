import React from 'react';
import './PokemonCard.css';
import { Pokemon } from '../../types';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const getTypeClass = (type: string) => {
    const typeClass = `type-${type.toLowerCase().replace(/\//g, '-')}`;
    return `type ${typeClass}`;
  };

  const getCardClass = (type: string) => {
    const cardClass = `card-${type.toLowerCase().replace(/\//g, '-')}`;
    return `card ${cardClass}`;
  };

  return (
    <div className={getCardClass(pokemon.type) || 'card card-default'}>
      <img src={pokemon.imageUrl} alt={pokemon.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{pokemon.name}</h2>
        <span className={getTypeClass(pokemon.type) || 'type type-default'}>{pokemon.type}</span>
        <p className="card-text">Gender: {pokemon.gender}</p>
        <p className="card-text">Abilities: {pokemon.abilities}</p>
        <p className="card-text">Weight: {pokemon.weight} kg</p>
        <p className="card-text">Weaknesses: {pokemon.weaknesses}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
