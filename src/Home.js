import './App.css';
import data from './data';
import MovieRow from './MovieRow';
import Nav from './Nav';
import HomeBanner from './HomeBanner';

function Home() {

  return (
    <div className="Movies">
      <Nav></Nav>
      <HomeBanner></HomeBanner>
    </div>  
  );
}

export default Home;
