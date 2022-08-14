import './styles/app.css';
import MovieRow from './MovieRow';
import Nav from './Nav';
import MoviesBanner from './MoviesBanner.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";

function Movies() {

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
        console.log(request);
        return request;
      }
      fetchData();
      }, []);

  return (
    <div className="Movies">
      <MoviesBanner feature={feature} featuredBackground={featuredBackground}></MoviesBanner>
      <MovieRow></MovieRow>
    </div>  
  );
}
export default Movies;
