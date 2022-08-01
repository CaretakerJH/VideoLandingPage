import './App.css';
import data from './data';
import MovieRow from './MovieRow';
import Nav from './Nav';
import SeriesBanner from './SeriesBanner.js';
import SeriesRow from './SeriesRow.js';



function Series() {

  return (
    <div className="Movies">
      
      
      <SeriesBanner></SeriesBanner>
      <SeriesRow></SeriesRow>

    </div>  
  );
}

export default Series;
