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
            url: '/src/assets/bike.jpg',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            person: 'John Doe'
        },
        {
            url: '/src/assets/bg-presentation.jpg',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            person: 'Jane Doe'
        },
        {
            url: '/src/assets/bg-presentation.jpg',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            person: 'Jane Doe'
        },
    ]

    return (
        <div id="reviews" className='p-6 md:p-12 bg-white flex flex-col'>
            <h2 className="mb-5 text-zinc-800 text-4xl md:text-5xl lg:text-6xl font-bold">Nuestros clientes</h2>
            <h4 className="mb-4 text-gray-600 text-lg md:text-xl lg:text-2xl">Conoce lo que nuestros clientes opinan sobre nosotros.</h4>
            <div className='mx-auto w-full md:w-[80vw] lg:w-[70vw] rounded-lg p-4'>
                <Slider {...settings}>
                    {
                        data.map((item, index) => (
                            <ImageDescriptionCard key={index} imageUrl={item.url} person={item.person} description={item.description} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;