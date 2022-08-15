import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import './styles/styles.css';
import {useNavigate} from 'react-router-dom';
import Player from './Player';
import ReactDOM from "react-dom";

SwiperCore.use([Navigation, Pagination, A11y])

function SwiperRow({mediaList}) {
    const navigate = useNavigate();
    const baseURL = 'https://d1chb2avsvwxer.cloudfront.net/';
    const slides = [];
    console.log(mediaList);

    if (mediaList.type == "collection")
    {for (let i = 0; i < mediaList.childCount; i++)
        {
            slides.push(
                <SwiperSlide className='swiper-container' key={`slide-${i}`}>
                    <img src={mediaList.children[i].metadata.images[1].url} 
                    alt={`Slide ${i}`}></img>
                </SwiperSlide>
            )
        }}

        else if (mediaList.type = "episode"){
            for (let i = 0; i < mediaList.length; i++)
            slides.push(
                <SwiperSlide className='episode-swiper-container' key={`slide-${i}`}>
                    <img className='episode-image' src={mediaList[i].metadata.images[0].url} 
                    alt={`Slide ${i}`}></img>
                </SwiperSlide>
            )
            console.log('Action Movies');
        }
        else 
        {for (let i = 0; i < mediaList.length; i++)
            {
                slides.push(
                    <SwiperSlide className='swiper-container' key={`slide-${i}`}>
                        <img src={mediaList[i].metadata.images[1].url} 
                        alt={`Slide ${i}`}></img>
                    </SwiperSlide>
                )
                
            }}

        const navigateToPlayer = ({obj}) => {
        const fullURl = baseURL + obj;
        const rootElement = document.getElementById("root");
        console.log(fullURl);
        navigate('/player')
        ReactDOM.render(<Player url={fullURl} />, rootElement);
        }

        const handleClick = (obj) => {
        navigateToPlayer({obj});
        }
        
         return (
            <React.Fragment>
                <Swiper className='swiper-wrapper'
                id="main"
                tag="section"
                wrapperTag='ul'
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination
                onClick={(slides) =>
                 mediaList.type == "collection" ? 
                 handleClick(mediaList.children[slides.clickedIndex].objectKey) : 
                 handleClick(mediaList[slides.clickedIndex].objectKey)}>{slides}</Swiper>
            </React.Fragment>
    )
}
export default SwiperRow;