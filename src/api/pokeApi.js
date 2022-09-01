import axios from 'axios';

const pokemonService = (
  axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }));

const getAllPokemons = (pageNumber, limit) => pokemonService({
  method: 'GET',
  params: {
    offset: pageNumber * limit,
    limit,
  },
})
  .then((res) => res);

const getPokemon = (id) => pokemonService({
  method: 'GET',
  url: id,
})
  .then((res) => res);

const methods = {
  getAllPokemons,
  getPokemon,
};

export default methods;
