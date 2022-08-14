import "../banner.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "../data.js";


function Banner({feature, featuredBackground}){

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
    export default Banner;
        
            
