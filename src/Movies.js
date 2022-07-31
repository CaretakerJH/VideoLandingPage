import './App.css';
import data from './data';
import Row from './Row';
import Nav from './Nav';
import Moviesbanner from './MoviesBanner.js'



function Movies() {

  return (
    <div className="Movies">

      <Moviesbanner></Moviesbanner>
      <Nav></Nav>  
      <Row></Row>
    </div>  
  );
}

export default Movies;
