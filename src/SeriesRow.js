import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import data from './data';

function SeriesRow() {

    {/* setting state for creating variables in react */}
    const [movies, setMovies] = useState([]);
    const [action, setAction] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [counter, setCounter] = useState(0);



      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {
            //requesting data from URL
            async function fetchData(){              
                
                const request = await axios.get(data.seriesType);
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



         return (
             <div className="row">
                {/* title */}
                <h2 >{"Action"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {action.map(action => (
                        <img className="row__poster"src={action.metadata.images[0].url} alt={action.name}/>                       
                        
                    ))}

                </div>  
                <h2 >{"Adventure"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {adventure.map(adventure => (
                        <img className="row__poster"src={adventure.metadata.images[0].url} alt={adventure.name}/>                       
                        
                    ))}

                </div>  
                <h2 >{"Animation"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {animation.map(animation => (
                        <img className="row__poster"src={animation.metadata.images[1].url} alt={animation.name}/>                       
                        
                    ))}
                </div>  
                
             </div>
             
    )
}

export default SeriesRow