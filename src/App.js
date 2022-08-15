import './styles/app.css';
import './styles/index.css';
import Nav from './services/nav';
import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import MoviesTest from './pages/movies';
import LandingTest from './pages/landing';
import SeriesTest from './pages/series';
import PlayerTest from './pages/test';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes><Route  path="/" exact element={<LandingTest/>}/></Routes>
      <Routes><Route  path="/series" exact element={<SeriesTest/>}/></Routes>
      <Routes><Route  path="/movies" exact element={<MoviesTest/>}/></Routes>
      <Routes><Route  path="/player" exact element={<PlayerTest/>}/></Routes>
    </div>  
  );
  }
export default App;
