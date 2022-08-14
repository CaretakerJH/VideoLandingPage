import './styles/app.css';
import './index.css';
import Nav from './Nav';
import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Collections from './Collections';
import Movies from './Movies';
import Series from './Series';
import Player from './Player.js';
import PlayerPage from './PlayerPage';
import AppBG from './AppBG';



function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes><Route  path="/" exact element={<Collections/>}/></Routes>
      <Routes><Route  path="/series" exact element={<Series/>}/></Routes>
      <Routes><Route  path="/landingpage" exact element={<Collections/>}/></Routes>
      <Routes><Route  path="/movies" exact element={<Movies/>}/></Routes>
      <Routes><Route  path="/player" exact element={<PlayerPage/>}/></Routes>
    </div>  
  );

  }


export default App;
