import '../styles/app.css';
import data from '../data';
import Banner from '../components/banner';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Seriesrow from '../components/rows/seriesrow';

function SeriesTest() {
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
      <Banner feature={feature} featuredBackground={featuredBackground} featuredchildren={featuredchildren}></Banner>
      <Seriesrow></Seriesrow>
    </div>  
  );
}

export default SeriesTest;
