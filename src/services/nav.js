import React from 'react';
import '../styles/nav.css';
import {Link} from "react-router-dom";
import {useState} from 'react';

function Nav(){
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);}

    return(

        <div className="nav">    
            <img className="w-32 p-5 left-0 top-0"
            src="https://i.ibb.co/hRWNrtB/Ahue.png"
            alt="Netflix Logo"
            />
            <button onClick={handleClick} className="hamburger md:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 "
                viewBox="0 0 20 20"
                fill="lightblue"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            <img className="w-20 absolute p-5 right-0 top-0 pt-9"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Netflix Profile"    
            />
            {isShown && (
                <div class="mh-60 grid grid-cols-4 md:hidden">
                <li className="links pl-[15px]"><Link to="/">LANDING</Link></li>
                <li className="links"><Link to="/movies">MOVIES</Link></li>
                <li className="links"><Link to="/series">SERIES</Link></li>
                <li className="links"><Link to="/player">PLAYER</Link></li>
                </div>
            )}
            <li className="invisible links md:visible"><Link to="/">LANDING PAGE</Link></li>
            <li className="invisible links md:visible"><Link to="/movies">MOVIES</Link></li>
            <li className="invisible links md:visible"><Link to="/series">SERIES</Link></li>
            <li className="invisible links md:visible"><Link to="/player">PLAYER</Link></li>
        </div>
    )
}

export default Nav;