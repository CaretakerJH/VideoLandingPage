import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import data from './data';
import {Routes,useNavigate,} from 'react-router-dom';
import Player from './Player';
import ReactDOM, { render } from "react-dom";
import Nav from "./Nav";


function MovieRow() {
    
    const navigate = useNavigate();

    const baseURL = 'https://d1chb2avsvwxer.cloudfront.net/';

    {/* setting state for creating variables in react */}
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState([]);
    const [counter, setCounter] = useState(0);
    
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

        const navigateToPlayer = ({obj}) => {
            const fullURl = baseURL + obj;
            const rootElement = document.getElementById("root");
            
            console.log(fullURl);
            
            render(
                <Nav/>,
                ReactDOM.render(<Player url={fullURl} />, rootElement)
            )
            
            
        }
        

        const handleClick = (obj) => {

           navigateToPlayer({obj});
           
        }

         return (
             <div className="row">
                {/* title */}
                <h2 >{"More Movies"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {movies.map(movie => (
                        
                        <img key={movie.name}
                        onClick={() => handleClick(movie.objectKey)}
                        className="row__poster"
                        src={movie.metadata.images[0].url} alt={movie.name}
                        />
                    ))}

                </div>
                
             </div>
    )
}

export default MovieRow