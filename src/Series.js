import './styles/app.css';
import data from './data';
import MovieRow from './MovieRow';
import Nav from './Nav';
import SeriesBanner from './SeriesBanner.js';
import SeriesRow from './SeriesRow.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Series() {

  const [feature, setFeatured] = useState([]);
  const [featuredBackground, setFeaturedBackground] = useState([]);
  const [featuredchildren, setFeaturedChildren] = useState([]);
  
  useEffect(() => {
      async function fetchData(){

        //data retrieval request  
        const request = await axios.get(data.seriesType);
        const size = request.data.length;  
        const random = Math.floor(Math.floor(Math.random() * size));
        const featured = request.data[random];
        const featuredBackground = featured.metadata.images[1].url;
        const featuredchildren = featured.children;

        //data storage
        setFeatured(featured);
        setFeaturedBackground(featuredBackground);
        setFeaturedChildren(featuredchildren);
        return request;
      }
      fetchData();
      }, []);


  return (
    <div className="Movies">
      <SeriesBanner feature={feature} featuredBackground={featuredBackground} featuredchildren={featuredchildren}></SeriesBanner>
      <SeriesRow></SeriesRow>

    </div>  
  );
}

export default Series;
