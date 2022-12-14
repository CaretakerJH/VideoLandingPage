import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../data';
import Showreel from '../showreel';

function Seriesrow() {

    {/* setting state for creating variables in react */}
    const [movies, setMovies] = useState([]);
    const actionMovies = [];
    const adventureMovies = [];

      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {
            //requesting data from URL
            async function fetchData(){              
                const request = await axios.get(data.seriesType);
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

         return (
            <>
             <div>
                <h2 class="text-white font-bold md:text-xl p-4">{"Action"}</h2>
                <Showreel mediaList={actionMovies}></Showreel>
                <h2 class="text-white font-bold md:text-xl p-4">{"Adventure"}</h2>
                <Showreel mediaList={adventureMovies}></Showreel>
             </div>
             </>

    );
}
export default Seriesrow