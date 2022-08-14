import '../styles/app.css';
import Row from '../components/row';
import Nav from '../services/nav.js';
import Banner from '../components/banner';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../data';

function MoviesTest() {

  const [feature, setFeatured] = useState([]);
  const [featuredBackground, setFeaturedBackground] = useState([]);

  useEffect(() => {
      async function fetchData(){
        //data retrieval request  
        const request = await axios.get(data.movieType);
        const size = request.data.length;  
        const random = Math.floor(Math.floor(Math.random() * size));
        const featured = request.data[random];
        const featuredBackground = featured.metadata.images[1].url
        //data storage

        setFeatured(featured);
        setFeaturedBackground(featuredBackground);
        return request;
      }
      fetchData();
      }, []);

  return (
    <div className="Movies">
      <Banner feature={feature} featuredBackground={featuredBackground}></Banner>
      <Row></Row>
    </div>  
    
  );
}
export default MoviesTest;
