import React from 'react';
import propTypes from 'prop-types';

import PokemonCard from '../PokemonCard';

const PokemonList = ({
  pokemonList = [],
}) => (
  <div className="PokemonList">
    {pokemonList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)}
  </div>
);

PokemonList.propTypes = {
  pokemonList: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    types: propTypes.arrayOf(propTypes.string),
    image: propTypes.string,
  })),
};

PokemonList.defaultProps = {
  pokemonList: [],
};

export default PokemonList;
