import './styles/app.css';
import './styles/index.css';
import Nav from './services/nav';
import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import MoviesTest from './pages/movies';
import LandingTest from './pages/landing';
import SeriesTest from './pages/series';
import PlayerTest from './pages/test';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="w-[800px] sm:w-[60px]h-[620px] md:w-[1260px] lg:w-[1260px] xl:w-[1900px]">
      <Nav></Nav>
      <Routes><Route  path="/" exact element={<LandingTest/>}/></Routes>
      <Routes><Route  path="/series" exact element={<SeriesTest/>}/></Routes>
      <Routes><Route  path="/movies" exact element={<MoviesTest/>}/></Routes>
      <Routes><Route  path="/player" exact element={<PlayerTest/>}/></Routes>
    </div>  
  );
  }
export default App;
