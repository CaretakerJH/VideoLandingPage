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
    const [jp, setJP] = useState([]);
    const [ani, setANI] = useState([]);
    const [robocop, setROBO] = useState([]);
    const [caminades, setCAMI] = useState([]);
    const [ironman, setIRON] = useState([]);
    const [bingewatch, setBINGE] = useState([]);
    const [watchagain, setWATCH] = useState([]);
    const [starwars, setSTAR] = useState([]);

      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {

            //requesting data from URL
            async function fetchData(){              
                const request = await axios.get(data.movieType);
                const jurrasic = await axios.get(data.jpCollection);
                const animated = await axios.get(data.anishortsCollection);
                const robo = await axios.get(data.roboCollection);
                const cami = await axios.get(data.camoCollection);
                const iron = await axios.get(data.ironCollection);
                const binge = await axios.get(data.Bingeollection);
                const watch = await axios.get(data.watchCollection);
                const star = await axios.get(data.starCollection);

                setMovies(request.data);
                setJP(jurrasic.data.children);
                setANI(animated.data.children);
                setROBO(robo.data.children);
                setCAMI(cami.data.children);
                setIRON(iron.data.children);
                setBINGE(binge.data.children);
                setWATCH(watch.data.children);
                setSTAR(star.data.children);

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

         return (
             <div className="row">
                {/* title */}
                

                {/* title */}
                
                <h2 >{"Star Wars Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {starwars.map(starwars => (
                         <img key={starwars.name} onClick={() => handleClick(starwars.objectKey)} className="row__poster"src={starwars.metadata.images[1].url} alt={starwars.name}/>                       
                    ))}
                </div>
            
                <h2 >{"Animated Shorts"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {ani.map(ani => (
                        <img key={ani.name} onClick={() => handleClick(ani.objectKey)} className="row__poster"src={ani.metadata.images[1].url} alt={ani.name}/>                       
                    ))}
                </div>
                <h2 >{"Jurrasic Park Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {jp.map(jp => (
                        <img key={jp.name} onClick={() => handleClick(jp.objectKey)} className="row__poster"src={jp.metadata.images[1].url} alt={jp.name}/>                       
                    ))}
                </div>

                <h2 >{"RoboCop Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {robocop.map(robocop => (
                        <img key={robocop.name} onClick={() => handleClick(robocop.objectKey)} className="row__poster"src={robocop.metadata.images[1].url} alt={robocop.name}/>                       
                    ))}
                </div>

                <h2 >{"Camimades"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {caminades.map(caminades => (
                        <img key={caminades.name} onClick={() => handleClick(caminades.objectKey)}className="row__poster"src={caminades.metadata.images[1].url} alt={caminades.name}/>                       
                    ))}
                </div>

                <h2 >{"Iron Man Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {ironman.map(ironman => (

                       <img key={ironman.name} onClick={() => handleClick(ironman.objectKey)} className="row__poster"src={ironman.metadata.images[1].url} alt={ironman.name}/>                       
                    ))}
                </div>
                <h2 >{"Binge Worthy"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {bingewatch.map(bingewatch => (
                        <img key={bingewatch.name} onClick={() => handleClick(bingewatch.objectKey)} className="row__poster"src={bingewatch.metadata.images[0].url} alt={bingewatch.name}/>                       
                    ))}
                </div>

                <h2 >{"Trending"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {watchagain.map(watchagain => (
                        <img key={watchagain.name} onClick={() => handleClick(watchagain.objectKey)} className="row__poster"src={watchagain.metadata.images[0].url} alt={watchagain.name}/>                       
                    ))}
                </div>
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