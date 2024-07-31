import React, { useEffect, useState } from 'react';
import { getPokemons } from '../../services/pokemonService';
import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import LoadingCard from '../LoadingCards/LoadingCards';
import PokemonFilters from '../PokemonFilters/PokemonFilters';
import AddPokemonModal from '../AddPokemonModal/AddPokemonModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../context/AuthContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Pokemon, NewPokemon } from '../../types';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
       
        const data = await getPokemons();
        //esperar 2 segundos
        await new Promise(resolve => setTimeout(resolve, 1500));//TODO: Solo para pruebas, eliminar en producción
        setPokemons(data);
        setFilteredPokemons(data);
        setError(null); // Reiniciar error en caso de éxito
        
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error desconocido');
        }
      } finally {
        setLoading(false); // Desactivar el estado de carga
      }
    };

    fetchPokemons();
  }, []);

  const handleFilterChange = (filters: { type: string; ability: string; gender: string }) => {
    const filtered = pokemons.filter(pokemon => {
      return (
        (filters.type === '' || pokemon.type.includes(filters.type)) &&
        (filters.ability === '' || pokemon.abilities.includes(filters.ability)) &&
        (filters.gender === '' || pokemon.gender === filters.gender)
      );
    });
    setFilteredPokemons(filtered);
  };

  const handleAddPokemon = (pokemon: NewPokemon) => {
    const newPokemon: Pokemon = { ...pokemon, id: pokemons.length + 1 };
    setPokemons([...pokemons, newPokemon]);
    setFilteredPokemons([...filteredPokemons, newPokemon]);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Pokémon List</h1>
        {user ? (
          <>
           <button className="add-button" onClick={() => setIsModalOpen(true)}>
           <FontAwesomeIcon icon={faPlus} /> Add Pokémon</button>
          </>) : (
            <></>
          )}
      </div>
      <PokemonFilters onFilterChange={handleFilterChange} />
      {error && <div className="error">{error}</div>}
      <div className="card-grid">
        {loading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
      <AddPokemonModal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        onAddPokemon={handleAddPokemon} 
      />
    </div>
  );
};

export default PokemonList;
