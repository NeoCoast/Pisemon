import React from 'react';
import { useNavigate } from 'react-router-dom';

import pokemon from '../../assets/pokeball.png';
import './styles.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img
        className="Header-image"
        src={pokemon}
        alt="Homepage"
        onClick={() => navigate('/')}
        height={100}
        width={100}
      />
      <h2 className="Header-header">
        Bienvenidos a PISemon
      </h2>
    </div>
  );
};

export default Header;
