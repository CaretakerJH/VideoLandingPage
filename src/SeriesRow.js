import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import data from './data';
import SwiperRow from './SwiperRow.js';
import Showreel from './components/showreel.js';

function SeriesRow() {

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
             <div className="row">
                <h2>{"Action"}</h2>
                <SwiperRow mediaList={actionMovies}></SwiperRow>
                <h2>{"Adventure"}</h2>
                <SwiperRow mediaList={adventureMovies}></SwiperRow>
             </div>
             

    )
}
export default SeriesRow