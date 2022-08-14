import './styles/app.css';
import data from './data';
import MovieRow from './MovieRow';
import Nav from './Nav';
import Moviesbanner from './MoviesBanner.js'



function Movies() {

  return (
    <div className="Movies">

      <Moviesbanner></Moviesbanner>
      <MovieRow></MovieRow>

    </div>  
  );
}

export default Movies;
