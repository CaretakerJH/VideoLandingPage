import "./banner.css";
import React, { useState, useEffect } from 'react';
import SwiperRow from "./SwiperRow";
import Showreel from "./components/showreel";


function SeriesBanner({feature, featuredBackground, featuredchildren}){

        function truncate(str,number){
            return str?.length > number ? str.substr(0, number-1) + "..." : str;
        }
        console.log(featuredchildren);

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
        <h1 className="banner__overview">{"Overview: "}</h1>
        <h1 className="banner__description">{truncate(feature.description,430)}</h1>
        
    
    <h2 className="banner__overview">{"Episodes :"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <SwiperRow mediaList={featuredchildren}></SwiperRow>
                </div>
                </div>
                </header>
    );
}
    export default SeriesBanner;