import React from 'react';
import propTypes from 'prop-types';

import './styles.css';

const PokemonCard = ({
  id,
  name,
  types,
  image,
}) => {
  const [type1, type2 = ''] = types;

  return (
    <div className="PokemonCard">
      <div className="PokemonCard-left">
        <p>
          ID: {id}
        </p>
        <p>
          Name: {name}
        </p>
        <p>
          Types:
        </p>
        <p>
          {`- ${type1}`}
        </p>
        {type2 && <p>{`- ${type2}`}</p>}
      </div>
      <img
        className="PokemonCard-image"
        src={image}
        alt={name}
        width="200"
        height="200"
      />
    </div>
  );
};

PokemonCard.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  types: propTypes.arrayOf(propTypes.string).isRequired,
  image: propTypes.string.isRequired,
};

export default PokemonCard;
