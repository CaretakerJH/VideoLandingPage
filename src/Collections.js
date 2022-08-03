import './App.css';
import Nav from './Nav';
import CollectionRow from './CollectionRow';
import CollectionBanner from './CollectionBanner';


function Collections() {

  return (
    <div className="Movies">
      <CollectionBanner></CollectionBanner>
      <CollectionRow></CollectionRow>
    </div>  
  );
}

export default Collections;
