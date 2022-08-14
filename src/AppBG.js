import './styles/app.css';
import Nav from './Nav.js';
import './styles/styles.css';

function AppBG() {
  const rootElement = document.getElementById("root");
  return (
    <div className="App">
     <Nav></Nav>
     <header className="player__banner"
        style={{backgroundSize: "cover",
        backgroundImage: `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
        backgroundposition: "center center",
        }}
    >
    </header> 
    </div>  
  );
}

export default AppBG;
