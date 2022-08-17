import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylerow.css';
import data from '../../data';
import Showreel from '../showreel';


function Collectionrow() {

    {/* setting state for creating variables in react */}
    const [collections, setCollections] = useState([]);
      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {
            //requesting data from URL
            async function fetchData(){              
                const request = await axios.get(data.collectionType);
                setCollections(request.data);
                return request;
            }
            fetchData();
        }, []);

         return (
             <div className="row">
                {collections.map(collection => (
                    <div>
                        <h2 class="text-white font-bold md:text-xl p-4">{collection.name}</h2>
                        <Showreel mediaList={collection}></Showreel>
                        </div>
                    ))}
             </div>
    )
}

export default Collectionrow;