
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import data from './data';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import './styles.css';



function SwiperRow() {

    const slides = [];
    {/* setting state for creating variables in react */}
    const [movies, setMovies] = useState([]);

      //A snippet of code which runs based on a specific condition or variable.
        useEffect(() => {

            //requesting data from URL
            async function fetchData(){              
                const request = await axios.get(data.movieType);
                setMovies(request.data);
                return request;
            }
            fetchData();
            console.log(movies);

        }, []);

        for (let i = 0; i < movies.length; i++)
        {
            if (i==6 || i==9){/*mad max image is missing */
                continue;
            }
            else{
            slides.push(
                <SwiperSlide className='swiper-container' key = {`slide-${i}`}>
                    <img src={movies[i].metadata.images[1].url} 
                    alt={`Slide ${i}`}></img>
                </SwiperSlide>
            )}
        }

         return (
            <React.Fragment className='swiper-slider'>
                <Swiper 
                id="main"
                tag="section"
                wrapperTag='ul'
                spaceBetween={3}
                slidesPerView={5}>{slides}</Swiper>
            </React.Fragment>
            
    )
}
export default SwiperRow;