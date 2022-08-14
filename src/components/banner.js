import "./banner.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";


function Banner(){
    //storage creation
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



    return(
        <header className="banner"
        style={{backgroundSize: "cover",
        backgroundImage: `url(${featuredBackground})`,
        backgroundposition: "center center",
        }}
    >
        <div className="banner__contents">
          <h1 className ="banner__title">{feature.name}</h1>

          <div className="banner__buttons">
             <button className ="banner__button">Play</button>
             <button className ="banner__button">My List</button>
             
         </div>
        <h1 className="banner__rating">{"| RATING : " + feature.rating + " | YEAR : " + feature.year + " |"}</h1>
        <h1 className="banner__overview"><i>{"Overview: "}</i></h1>
        <h1 className="banner__description">{feature.description}</h1>

        
        </div>   
    </header>
    );
}
    export default Banner
        
            
