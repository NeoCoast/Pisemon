import React from 'react'

import './styles.css'
const PokemonCard = ({
  id,
  name,
  types,
  image
}) => {

  const [type1, type2 = ''] = types
  
  return (
    <div className='PokemonCard'>
      <div className='PokemonCard-left'>
        <p>
          ID: {id}
        </p>
        <p>
          Name: {name}
        </p>
        <p>
          Types
        </p>
        <p>
          {type1}
        </p>
        {type2 && <p>{type2}</p>}
      </div>
      <img className='PokemonCard-image' src={image} alt={name} width="200" height="200" />
    </div>
  )
}


export default PokemonCard;