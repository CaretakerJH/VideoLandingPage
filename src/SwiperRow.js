import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from './data';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/styles.css';



function SwiperRow({mediaList}) {
    const slides = [];
        for (let i = 0; i < mediaList.length; i++)
        {
            slides.push(
                <SwiperSlide className='swiper-container' key={`slide-${i}`}>
                    <img src={mediaList[i].metadata.images[1].url} 
                    alt={`Slide ${i}`}></img>
                </SwiperSlide>
            )
        }
         return (
            <React.Fragment>
                <Swiper className='swiper-wrapper'
                id="main"
                tag="section"
                wrapperTag='ul'
                spaceBetween={10}
                slidesPerView={7}>{slides}</Swiper>
            </React.Fragment>
    )
}
export default SwiperRow;