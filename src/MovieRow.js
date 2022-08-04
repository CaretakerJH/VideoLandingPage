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
    const [action, setAction] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [animation, setAnimation] = useState([]);

      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {

            //requesting data from URL
            async function fetchData(){              
                const request = await axios.get(data.movieType);
                const act = await axios.get(data.actionGenre);
                const adv = await axios.get(data.adventureGenre);
                const ani = await axios.get(data.animationGenre);

                setMovies(request.data);
                setAction(act.data);
                setAdventure(adv.data);
                setAnimation(ani.data);

                return request;
            }
            fetchData();
        }, []);

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

        function checkGenre(x)
        {
            return x.type === "movie" ? true: false;
        }
        console.log(action);

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

                <h2 >{"Action"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {action.map(action => (
                        
                        checkGenre(action) == true ? <img key={action.name} onClick={() => handleClick(action.objectKey)} className="row__poster"src={action.metadata.images[1].url} alt={action.name}/> : <div></div>  
                       
                    ))}

                </div>  
                <h2 >{"Adventure"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {adventure.map(adventure => (
                        checkGenre(adventure) == true ? <img key={adventure.name} onClick={() => handleClick(adventure.objectKey)} className="row__poster"src={adventure.metadata.images[1].url} alt={adventure.name}/> : <div></div>  
                    ))}

                </div>  
                <h2 >{"Animation"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {animation.map(animation => (
                        checkGenre(animation) == true ? <img key={animation.name} onClick={() => handleClick(animation.objectKey)} className="row__poster"src={animation.metadata.images[1].url} alt={animation.name}/> : <div></div>  
                        
                    ))}
                </div>  
                
             </div>
    )
}

export default MovieRow