import "./banner.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";
import './row.css';
import { createPath } from "react-router-dom";


function CollectionBanner(){


    //variable creation
    const [collection, setCollection] = useState([]);
    const [background, setBackground] = useState([]);
    const [jp, setJP] = useState([]);
    const [ani, setANI] = useState([]);
    const [robocop, setROBO] = useState([]);
    const [caminades, setCAMI] = useState([]);
    const [ironman, setIRON] = useState([]);
    const [bingewatch, setBINGE] = useState([]);
    const [watchagain, setWATCH] = useState([]);
    const [starwars, setSTAR] = useState([]);

    useEffect(() => {
        async function fetchData(){
          //data retrieval request  
          const request = await axios.get(data.collectionType);
          const jurrasic = await axios.get(data.jpCollection);
          const animated = await axios.get(data.anishortsCollection);
          const robo = await axios.get(data.roboCollection);
          const cami = await axios.get(data.camoCollection);
          const iron = await axios.get(data.ironCollection);
          const binge = await axios.get(data.Bingeollection);
          const watch = await axios.get(data.watchCollection);
          const star = await axios.get(data.starCollection);

          setJP(jurrasic.data.children);
          setANI(animated.data.children);
          setROBO(robo.data.children);
          setCAMI(cami.data.children);
          setIRON(iron.data.children);
          setBINGE(binge.data.children);
          setWATCH(watch.data.children);
          setSTAR(star.data.children);

          //data storage
          setCollection(request.data);
          console.log(request.data);
          return request;
        }

        fetchData();
        
        }, []);

        return(
            <div className="row">
                {/* title */}
                <h2 >{"Binge Worthy"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {bingewatch.map(bingewatch => (
                        <img className="row__poster"src={bingewatch.metadata.images[0].url} alt={bingewatch.name}/>                       
                    ))}
                </div>

                <h2 >{"Trending"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {watchagain.map(watchagain => (
                        <img className="row__poster"src={watchagain.metadata.images[0].url} alt={watchagain.name}/>                       
                    ))}
                </div>
                <h2 >{"Star Wars Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {starwars.map(starwars => (
                        <img className="row__poster"src={starwars.metadata.images[0].url} alt={starwars.name}/>                       
                    ))}
                </div>
                

                <h2 >{"Animated Shorts"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {ani.map(ani => (
                        <img className="row__poster"src={ani.metadata.images[0].url} alt={ani.name}/>                       
                    ))}
                </div>
                <h2 >{"Jurrasic Park Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {jp.map(jp => (
                        <img className="row__poster"src={jp.metadata.images[0].url} alt={jp.name}/>                       
                    ))}
                </div>

                <h2 >{"RoboCop Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {robocop.map(robocop => (
                        <img className="row__poster"src={robocop.metadata.images[1].url} alt={robocop.name}/>                       
                    ))}
                </div>

                <h2 >{"Camimades"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {caminades.map(caminades => (
                        <img className="row__poster"src={caminades.metadata.images[1].url} alt={caminades.name}/>                       
                    ))}
                </div>

                <h2 >{"Iron Man Collection"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div className='row__posters'>
                {ironman.map(ironman => (
                        <img className="row__poster"src={ironman.metadata.images[1].url} alt={ironman.name}/>                       
                    ))}
                </div>              
             </div>)

}
        export default CollectionBanner;
        
            
