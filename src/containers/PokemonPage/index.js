import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../api/pokeApi';
import PokemonCard from '../../components/PokemonCard';
import arrow from '../../assets/arrow.png';
import './styles.css';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();
  const getPokemonById = async (pokemonId) => {
    setPokemon(null);
    setIsLoading(true);

    try {
      const res = await api.getPokemon(pokemonId);
      if (res.data) {
        const poke = res.data;
        setPokemon({
          id: poke.id,
          name: poke.name,
          types: poke.types?.map(({ type }) => type.name) || [],
          image: poke.sprites?.front_default || '',
        });
      }
    } catch (error) {
      window.alert('Error al obtener el pokemon');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="PokemonPage" />
    );
  }

  return (
    <div className="PokemonPage">
      {pokemon ? (
        <div className="PokemonPage-row-container">
          <div className="PokemonPage-row">
            {Number(id) - 1 > 0 && (
              <div
                aria-hidden="true"
                className="PokemonPage-img-container"
                onClick={() => navigate(`/pokemon/${Number(id) - 1}`)}
              >
                <img
                  className="PokemonPage-rotated-img"
                  src={arrow}
                  alt="Arrow"
                  height={20}
                  width={20}
                />
              </div>
            )}
            <PokemonCard {...pokemon} />
            <div
              aria-hidden="true"
              className="PokemonPage-img-container"
              onClick={() => navigate(`/pokemon/${Number(id) + 1}`)}
            >
              <img
                src={arrow}
                alt="Arrow"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
      )
        : <p>Pokemon not found!</p>}
    </div>
  );
};

export default PokemonPage;
