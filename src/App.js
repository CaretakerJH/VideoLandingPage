import './App.css';
import data from './data';
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';
import Movies from './Movies';
import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';



function App() {

  return (
    <div className="App">
      <Routes><Route  path="/movies" exact element={<Movies/>} /></Routes>
      <Banner></Banner>
      <Nav></Nav>  
      <Row></Row>
    </div>  
  );
}

export default App;
