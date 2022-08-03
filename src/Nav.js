import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav(){
    return(
        <div className="nav">
            <img className="nav__logo"
            src="https://i.ibb.co/hRWNrtB/Ahue.png"
            alt="Netflix Logo"
            />

            <img className="nav__profile"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Netflix Profile"    
            />
            <li className="links"><Link to="/collections">LANDING PAGE</Link></li>
            <li className="links"><Link to="/movies">MOVIES</Link></li>
            <li className="links"><Link to="/series">SERIES</Link></li>
            <li className="links"><Link to="/player">PLAYER</Link></li>

        </div>
    )
}

export default Nav;