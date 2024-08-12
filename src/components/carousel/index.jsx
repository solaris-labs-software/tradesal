import React from 'react';
import Slider from 'react-slick';
import ImageDescriptionCard from '../common/image-description-card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "/src/components/common/arrows/index.jsx";

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, 
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    

    const data = [
        {
            url: '/src/assets/bg-presentation.jpg',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
        },
        {
            url: '/src/assets/bg-presentation.jpg',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
        },
        {
            url: '/src/assets/bg-presentation.jpg',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
        },
    ]

    return (
        <div className='mt-10'>
            <Slider {...settings}>
                {
                    data.map((item, index) => (
                        <div className=' ml-[30rem]'>
                            <ImageDescriptionCard key={index} imageUrl={item.url} description={item.description} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Carousel;