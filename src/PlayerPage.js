import './App.css';
import data from './data';
import MovieRow from './MovieRow';
import Player from './Player.js';
import Nav from './Nav.js';



function PlayerPage(key) {
  console.log(key);
  
  const rootElement = document.getElementById("root");
  return (
    <div className="App">
     <Nav></Nav>
     <header className="player__banner"
        style={{backgroundSize: "cover",
        backgroundImage: `url('https://w.wallhaven.cc/full/z8/wallhaven-z872wo.jpg')`,
        backgroundposition: "center center",
        }}
    >
    </header> 
    </div>  
  );
}

export default PlayerPage;
