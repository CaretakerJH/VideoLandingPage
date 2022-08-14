
import Nav from './Nav';
import CollectionRow from './CollectionRow';
import CollectionBanner from './CollectionBanner';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";


function Collections() {

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
        console.log(featuredBackground);

  return (
    <div className="Movies">
      <CollectionBanner feature={feature}featuredBackground={featuredBackground}></CollectionBanner>
      <CollectionRow></CollectionRow>
    </div>  
  );
}

export default Collections;
