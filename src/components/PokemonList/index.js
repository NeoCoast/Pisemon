import React from 'react'
import PokemonCard from '../PokemonCard'

const PokemonList = ({
  pokemonList
}) => {

  return (
    <div className='PokemonList'>
      {pokemonList.map((pokemon) =>
        <PokemonCard {...pokemon}/>
      )}
    </div>
  )
}


export default PokemonList;