import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import data from './data';
import {useNavigate,} from 'react-router-dom';
import Player from './Player';
import ReactDOM, { render } from "react-dom";
import SwiperRow from './SwiperRow.js';
import {groupBy, includes} from 'lodash';

function MovieRow() {
    {/* setting state for creating variables in react */}
    const [movies, setMovies] = useState([]);
    const actionMovies = [];
    const adventureMovies = [];
    const animationMovies = [];

      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {
            //requesting data from URL
            async function fetchData(){              
                const request = await axios.get(data.movieType);
                setMovies(request.data);
                return request;
            }
            fetchData();
        }, []);

        function genreGrouping(list, string, finalList)
            {list.map((item) => (
                (item.genre.includes(string))
                  ? (finalList.push(item))
                  : null
            ))}
        
        genreGrouping(movies, "Action", actionMovies);
        genreGrouping(movies, "Adventure", adventureMovies);
        genreGrouping(movies, "Animation", animationMovies);

         return ( 
             <div className="row">
                {/* title */}
                <h2 >{"More Movies"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <SwiperRow mediaList={movies}></SwiperRow>
                </div>
                <h2 >{"Action"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <SwiperRow mediaList={actionMovies}></SwiperRow>
                </div>  
                <h2 >{"Adventure"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <SwiperRow mediaList={adventureMovies}></SwiperRow>
                </div>  
                <h2 >{"Animation"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <SwiperRow mediaList={animationMovies}></SwiperRow>
                </div>
             </div>
    )
}

export default MovieRow