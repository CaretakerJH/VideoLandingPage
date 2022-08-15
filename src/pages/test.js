import '../styles/app.css';
import Nav from '../services/nav';

function PlayerTest() {
  
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

export default PlayerTest;
