import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav(){
    return(
        <div className="nav">
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            alt="Netflix Logo"
            />

            <img className="nav__profile"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Netflix Profile"    
            />

            <li className="links"><Link to="">HOME</Link></li>    
            <li className="links"><Link to="/movies">MOVIES</Link></li>
            <li className="links"><Link to="/series">SERIES</Link></li>
            <li className="links"><Link to="/collections">COLLECTIONS</Link></li>
            <li className="links"><Link to="/player">PLAYER</Link></li>

        </div>
    )
}

export default Nav;