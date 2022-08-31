import './App.css';
import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';

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
const PisemonApp = () => {

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

export default PisemonApp;
