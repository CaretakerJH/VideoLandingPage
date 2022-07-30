import "./banner.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";

function Banner(){
    const [movie, setMovieBackground] = useState([]);
    const [text, setDescription] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        async function fetchData(){
          const request = await axios.get(data.actionGenre);
          const size = request.data.length;  
          const random = Math.floor(Math.random() * (size + 1));

          setMovieBackground(
            request.data[random].metadata.images[1].url
        );

          setDescription(
            request.data[random].description       
        );

        setTitle(           
            request.data[random].name       
        );
            
            return request;
        }
        fetchData();
    }, []);

    return(
        <header className="banner"
        style={{backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie}")`,
        backgroundposition: "center center",

        }}
    >
        <div className="banner__contents">
        <h1 className ="banner__title">
            {title}
        </h1>
        <div className="banner__buttons">
                <button className ="banner__button">Play</button>
                <button className ="banner__button">My List</button>
            </div>
        <h1 className="banner__description">{text}</h1>
        </div>
    </header>
    );
}
    export default Banner;
        
            
