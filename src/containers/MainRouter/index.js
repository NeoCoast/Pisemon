import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home';
import PokemonPage from '../PokemonPage';

const MainRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
    </Routes>
  </BrowserRouter>
);

export default MainRouter;
