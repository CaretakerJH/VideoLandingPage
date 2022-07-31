import "./banner.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";


function Moviesbanner(){
    //variable creation
    const [movie, setMovieBackground] = useState([]);
    const [text, setDescription] = useState([]);
    const [title, setTitle] = useState([]);
    const [rating, setRating] = useState([]);
    const [year, setYear] = useState([]);

    useEffect(() => {
        async function fetchData(){
          //data retrieval request  
          const request = await axios.get(data.movieType);
          const size = request.data.length;  
          const random = Math.floor(Math.random() * (size + 1));
   
          //data storage
          setMovieBackground(request.data[random].metadata.images[1].url);
          setDescription( request.data[random].description);
          setTitle(request.data[random].name);
          setRating(request.data[random].rating);
          setYear(request.data[random].year);
  
          return request;
        }
        fetchData();
        }, []);

    return(
        <header className="banner"
        style={{backgroundSize: "cover",
        backgroundImage: `url(${movie})`,
        backgroundposition: "center center",
        }}
    >
        <div className="banner__contents">
          <h1 className ="banner__title">{title}</h1>

          <div className="banner__buttons">
             <button className ="banner__button">Play</button>
             <button className ="banner__button">My List</button>
             
         </div>
         <h1 className="banner__rating">{"| RATING : " + rating + " | YEAR : " + year + " |"}</h1>
        <h1 className="banner__overview"><i>{"Overview: "}</i></h1>
        <h1 className="banner__description">{text}</h1>

        
        </div>   
    </header>
    );
}
    export default Moviesbanner;
        
            
