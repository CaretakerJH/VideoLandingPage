import './App.css';
import data from './data';
import MovieRow from './MovieRow';
import Player from './Player.js';
import Nav from './Nav.js';



function PlayerPage() {
  const rootElement = document.getElementById("root");
  return (
    <div className="App">
     <Nav></Nav>
     <div className="specialPlayer">
      <Player  url=''/>   

      </div>  
    </div>  
  );
}

export default PlayerPage;
