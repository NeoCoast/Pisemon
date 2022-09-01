import PokemonList from '../../components/PokemonList';

import './styles.css';

const PIKACHU = {
  name: 'Pikachu',
  id: 25,
  types: [
    'electric'
  ],
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
}

const RAICHU = {
  name: 'Raichu',
  id: 26,
  types: [
    'electric'
  ],
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
}

const POKEMON_LIST = [PIKACHU, RAICHU]
const Pisemon = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenidos a Pisemon
        </p>
      </header>
      <div className="App-content">
        <PokemonList pokemonList={POKEMON_LIST}/>
      </div>
    </div>
  );
}

export default Pisemon;
