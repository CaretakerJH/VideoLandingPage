import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import data from './data';
import SwiperRow from './SwiperRow.js';

function SeriesRow() {

    {/* setting state for creating variables in react */}
    const [movies, setMovies] = useState([]);
    const [action, setAction] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [featuredchildren, setFeaturedChildren] = useState([]);
    

      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {
            //requesting data from URL
            async function fetchData(){              
                
                const request = await axios.get(data.seriesType);
                const act = await axios.get(data.actionGenre);
                const adv = await axios.get(data.adventureGenre);
                const ani = await axios.get(data.animationGenre);
                

                console.log(act);
                setMovies(request.data);
                setAction(act.data);
                setAdventure(adv.data);
                setAnimation(ani.data);

                return request;

            }
            fetchData();
        }, []);

        function checkGenre(x)
        {
            return x.type === "series" ? true: false;
        }

        console.log(animation);

  
         return (
             <div className="row">
                
                <h2 >{"Action"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {action.map(action => (
                       
                       checkGenre(action) == true ? <img key={action.name} className="row__poster"src={action.metadata.images[1].url} alt={action.name}/> : <div></div>                      
                       
                    ))}

                </div>  
                <h2 >{"Adventure"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                    
                    {adventure.map(adventure => (
                         checkGenre(adventure) == true ? <img key={adventure.name} className="row__poster"src={adventure.metadata.images[1].url} alt={adventure.name}/> : <div></div>
                    ))}

                </div>  
                
             <SwiperRow></SwiperRow>
             </div>
             
    )
}

export default SeriesRow