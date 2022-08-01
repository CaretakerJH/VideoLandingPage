import "./banner.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";
import './row.css';
import { createPath } from "react-router-dom";


function CollectionBanner(){


    //variable creation
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        async function fetchData(){
          //data retrieval request  
          const request = await axios.get(data.collectionType);
          const children = await axios.get(data.guidTest);
          const size = request.data.length;  

          console.log(request.data);
          console.log(children.data);
          //data storage
          setCollection(request.data);
        
          return request;
        }
        fetchData();

        }, []);

        return(
            
            
            <div className="row">
                {collection.map(collection =>{

                    return(
                        
                        <div key= {collection.name}>
                            <h2 className="collection__Title">{collection.name}</h2>
                            <div className="banner__buttons">
                            <button className ="banner__button">View</button>
                            </div>
                            <p className="collection__Description">{collection.description}</p>
                        <hr/>
                        </div>                   
                        
                    )
                    
                })}

            </div>)


}
        export default CollectionBanner;
        
            
