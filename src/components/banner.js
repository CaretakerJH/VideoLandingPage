import "../styles/banner.css";
import React from 'react';
import Showreel from "./showreel";

function Banner({feature, featuredBackground, featuredchildren}){

    function truncate(str,number){
        return str?.length > number ? str.substr(0, number-1) + "..." : str;
    }
    
    if(featuredchildren == null){
        return(
            <header className="translate-x-[-165px] h-[900px] sm:translate-x-[000px]"
            style={{backgroundSize:"cover",
            backgroundImage: `url(${featuredBackground})`,
            backgroundposition: "center",
            }}
        >
            <div className="banner__contents translate-x-[165px] sm:translate-x-[000px]">
              <h1 className ="banner__title w-[500px] sm:w-[900px]">{feature.name}</h1>
              <div className="banner__buttons">
                 <button className="banner__button">Play</button>
                 <button className="banner__button">My List</button>
             </div>
            <h1 className="banner__rating">{"| RATING : " + feature.rating + " | YEAR : " + feature.year + " |"}</h1>
            <h1 className="py-[20px]"><i>{"Overview: "}</i></h1>
            <h1 className="text-sm w-[400px] sm:w-[650px]">{feature.description}</h1>
            </div>   
        </header>
        );
    }
    else {
        return(
            <header className="banner"
        style={{backgroundSize: "cover",
        backgroundImage: `url(${featuredBackground})`,
        backgroundposition: "center center",
        }}
    >
        <div className="banner__contents">
          <h1 className ="banner__title">{feature.name}</h1>

          <div className="banner__buttons">
             <button className ="banner__button">Play</button>
             <button className ="banner__button">My List</button>
             
         </div>
         <h1 className="banner__rating">{"| RATING : " + feature.rating + " | YEAR : " + feature.year + " |"}</h1>
        <h1 className="py-[20px]">{"Overview: "}</h1>
        <h1 className="py-[20px]">{truncate(feature.description,430)}</h1>
        
    
        <h2 className="py-[20px]">{"Episodes :"}</h2>
                {/* cmovies.map -> map iterates through each of the movie objects and obtains the path from the movie array. */}
                <div>
                <Showreel mediaList={featuredchildren}></Showreel>
                </div>
                </div>
                </header>
        )
    }

    
}
    export default Banner;
        