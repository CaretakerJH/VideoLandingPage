import data from "./data.js";
import React, { useState, useEffect} from 'react';
import axios from "axios";

function Row({title}) {

    const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {

            async function fetchData(){
                
                const request = await axios.get(data.actionGenre);
                console.log(request.data[0].name);
                return request;
            }
            fetchData();
        }, []);

    return(
             <div className="row">
                {/* title */}
                <h2>{ title }</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                </div>
                
             </div>
    )  
 }

 export default Row