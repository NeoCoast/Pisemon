import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Select from 'react-select';

import PokemonList from '../../components/PokemonList';
import api from '../../api/pokeApi';
import arrow from '../../assets/arrow.png';

import './styles.css';

const Pisemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsLimit, setItemsLimit] = useState(50);

  const itemsLimitOptions = [
    { label: 'view 10 items', value: 10 },
    { label: 'view 50 items', value: 50 },
    { label: 'view 100 items', value: 100 },
  ];

  const getPokemonList = async (newPageNumber = 0) => {
    setPokemonList([]);
    setIsLoading(true);
    setPageNumber(newPageNumber);

    try {
      const res = await api.getAllPokemons(newPageNumber, itemsLimit);

      if (res.data.results) {
        await res.data.results.map(async ({ name }) => {
          const { data: pokemon } = await api.getPokemon(name);

          setPokemonList((prev) => [...prev, {
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types?.map(({ type }) => type.name) || [],
            image: pokemon.sprites?.front_default || '',
          }].sort((a, b) => a.id - b.id));
        });
      }
    } catch (error) {
      window.alert('Error al obtener la lista de pokemons');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonList();
  }, [itemsLimit]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Bienvenidos a Pisemon
        </h2>
      </header>
      <div className="App-content">
        <div className="content-controllers">
          <div className="content-selector">
            <Select
              defaultValue={{ label: 'view 50 items', value: 50 }}
              className="selector-input"
              options={itemsLimitOptions}
              onChange={({ value }) => setItemsLimit(value)}
              isSearchable={false}
            />
          </div>
          <div className="content-pages">
            { pageNumber > 0 && (
              <button className="content-buttons" onClick={() => getPokemonList(pageNumber - 1)} type="button">
                <img src={arrow} className="rotated-img" alt="Arrow" width={20} />
                previous
              </button>
            )}
            <button className="content-buttons" onClick={() => getPokemonList(pageNumber + 1)} type="button">
              next
              <img src={arrow} alt="Arrow" width={20} />
            </button>
          </div>
        </div>

        {
          isLoading
            ? (
              <RotatingLines
                visible
                height="80"
                width="80"
                backgroundColor="#F4442E"
              />
            ) : <PokemonList pokemonList={pokemonList} />
        }
      </div>
    </div>
  );
};

export default Pisemon;
