import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../row.css';
import data from '../../data';
import Showreel from '../showreel';

function Movierow() {
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

        function arrayShuffle(list){
            list = list.sort(() => Math.random() - 0.5)
        }
        
        arrayShuffle(actionMovies);
        arrayShuffle(adventureMovies);
        arrayShuffle(animationMovies);

         return ( 
             <div className="row">
                {/* title */}
                <h2 >{"Animation"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <Showreel mediaList={animationMovies}></Showreel>
                </div>
                <h2 >{"Action"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <Showreel mediaList={actionMovies}></Showreel>
                </div>  
                <h2 >{"Adventure"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <Showreel mediaList={adventureMovies}></Showreel>
                </div>  
                
                <h2 >{"More Movies"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <Showreel mediaList={movies}></Showreel>
                </div>
             </div>
    )
}

export default Movierow