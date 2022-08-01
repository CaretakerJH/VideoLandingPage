import React from 'react';
import './Nav.css';


function HomeBanner(){
    return(
        <header className="homebanner"
        style={{backgroundSize: "cover",
        backgroundImage: `url('https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
        backgroundposition: "center center",
        }}
    >
    </header>)
}

export default HomeBanner;