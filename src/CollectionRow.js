import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import data from './data';
import SwiperRow from './SwiperRow.js';


function MovieRow() {

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
                        <h2 >{collection.name}</h2>
                        <SwiperRow mediaList={collection}></SwiperRow>
                        </div>
                    ))}
             </div>
    )
}
export default MovieRow