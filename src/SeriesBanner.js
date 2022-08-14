import "./banner.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";
import {Routes,useNavigate,} from 'react-router-dom';
import Player from './Player';
import ReactDOM, { render } from "react-dom";
import Nav from "./Nav";

function SeriesBanner(){
    const navigate = useNavigate();
    const baseURL = 'https://d1chb2avsvwxer.cloudfront.net/';

    //variable creation
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

        function truncate(str,number){
            return str?.length > number ? str.substr(0, number-1) + "..." : str;
        }

        const navigateToPlayer = ({obj}) => {
            const fullURl = baseURL + obj;
            const rootElement = document.getElementById("root");

            console.log(fullURl);
            navigate('/player')
            ReactDOM.render(<Player url={fullURl} />, rootElement);
        }
        const handleClick = (obj) => {
           navigateToPlayer({obj});
        }

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
                <div className='row__posters'>
                    
                    {featuredchildren.map(featuredchildren => (       
                       <img className="row__poster"
                       onClick={() => handleClick(featuredchildren.objectKey)}
                       src={featuredchildren.metadata.images[0].url} 
                       alt={featuredchildren.name}/>                       
                    ))}

                </div>
                </div>
                </header>
    );
}
    export default SeriesBanner;