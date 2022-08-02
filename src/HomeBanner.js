import React from 'react';
import './Nav.css';


function HomeBanner(){
    return(
        <header className="homebanner"
        style={{backgroundSize: "cover",
        backgroundImage: `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
        backgroundposition: "center center",
        }}
    >
    </header>)
}

export default HomeBanner;