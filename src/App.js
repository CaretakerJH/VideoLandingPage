import './styles/app.css';
import './index.css';
import Nav from './services/nav';

import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Collections from './Collections';
import Movies from './Movies';
import Series from './Series';
import PlayerPage from './PlayerPage';
import MoviesTest from './pages/movies';
import LandingTest from './pages/landing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes><Route  path="/" exact element={<LandingTest/>}/></Routes>
      <Routes><Route  path="/series" exact element={<Series/>}/></Routes>
      <Routes><Route  path="/movies" exact element={<MoviesTest/>}/></Routes>
      <Routes><Route  path="/player" exact element={<PlayerPage/>}/></Routes>
    </div>  
  );
  }
export default App;
