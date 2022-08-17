import './styles/app.css';
import './styles/index.css';
import Nav from './services/nav';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Movies from './pages/movies';
import Landing from './pages/landing';
import Series from './pages/series';
import Player from './pages/player';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="w-[800px] sm:w-[60px]h-[620px] md:w-[1260px] lg:w-[1260px] xl:w-[1900px]">
      <Nav></Nav>
      <Routes><Route  path="/" exact element={<Landing/>}/></Routes>
      <Routes><Route  path="/series" exact element={<Series/>}/></Routes>
      <Routes><Route  path="/movies" exact element={<Movies/>}/></Routes>
      <Routes><Route  path="/player" exact element={<Player/>}/></Routes>
    </div>  
  );
  }
export default App;
