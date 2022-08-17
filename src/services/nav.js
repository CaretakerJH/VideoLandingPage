import React from 'react';
import '../styles/nav.css';
import {Link} from "react-router-dom";

function Nav(){
    return(
        <div className="nav">
            <img className="w-32 p-7 left-0 top-0"
            src="https://i.ibb.co/hRWNrtB/Ahue.png"
            alt="Netflix Logo"
            />
            <img className="w-20 absolute p-5 right-0 top-0"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Netflix Profile"    
            />

            <li className="links"><Link to="/">LANDING PAGE</Link></li>
            <li className="links"><Link to="/movies">MOVIES</Link></li>
            <li className="links"><Link to="/series">SERIES</Link></li>
            <li className="links"><Link to="/player">PLAYER</Link></li>
        </div>
    )
}

export default Nav;