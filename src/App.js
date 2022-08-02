import './App.css';
import './index.css';
import Nav from './Nav';
import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Collections from './Collections';
import Movies from './Movies';
import Series from './Series';


function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes><Route  path="" exact element={<Home/>}/></Routes>
      <Routes><Route  path="/series" exact element={<Series/>}/></Routes>
      <Routes><Route  path="/collections" exact element={<Collections/>}/></Routes>
      <Routes><Route  path="/movies" exact element={<Movies/>}/></Routes>
    </div>  
  );
}

export default App;
