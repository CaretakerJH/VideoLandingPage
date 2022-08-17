import '../styles/app.css';
import Collectionrow from '../components/rows/collectionrow';
import Banner from '../components/banner';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../data';


function LandingTest() {

    const [feature, setFeatured] = useState([]);
    const [featuredBackground, setFeaturedBackground] = useState([]);
    useEffect(() => {
        async function fetchData(){
          //data retrieval request  
          const request = await axios.get(data.movieType);
          const collection = await axios.get(data.collectionType);
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
      <Banner feature={feature}featuredBackground={featuredBackground}></Banner>
      <Collectionrow></Collectionrow>
    </div>  
  );
}

export default LandingTest;