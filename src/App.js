import './App.css';
import data from './data';
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';


function App() {

  return (
    <div className="App">
      <Banner></Banner>
      <Nav></Nav>
      <h1>I'm, actually the best and this is easy. BELIEVE.</h1>
      <Row title="Hello"></Row>
    </div>  
  );
}

export default App;
