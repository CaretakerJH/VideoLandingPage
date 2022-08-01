import './App.css';
import Nav from './Nav';
import CollectionRow from './CollectionRow';
import CollectionBanner from './CollectionBanner';
import CollectionsBackground from './CollectionBackground';

function Collections() {

  return (
    <div className="Movies">

      <CollectionsBackground></CollectionsBackground>
      <CollectionBanner></CollectionBanner>

    </div>  
  );
}

export default Collections;
