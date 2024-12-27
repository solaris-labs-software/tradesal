import React from 'react';
import Slider from 'react-slick';
import ImageDescriptionCard from '../common/image-description-card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cit from "../../assets/Curso de informatica.jpeg"
import cit2 from "../../assets/cit.jpeg"
import manic from "../../assets/curso-manicuria.jpeg"
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
            url: cit,
            description: `Hice el curso de CIT (Curso de introduccion al trabajo) en la escuela numero uno de Escobar. Gracias a este curso hoy en dia estoy trabajando en blanco. Es una linda experiencia y muy recomendable. Es algo nuevo para mi y no pense que iba a pasar tan rapido de terminar el colegio a empezar a trabajar y gracias a este curso es posible. `,
            person: 'Ezequiel - Escobar, 9 de julio'
        },
        {
            url: cit2,
            description: `Tuve la oportunidad de realizar el Curso de Introducción al Trabajo (CIT), y quiero expresar mi más sincero agradecimiento a todos aquellos que hicieron posible este curso. Gracias a su dedicación y esfuerzo, hoy he logrado encontrar empleo en el Parque Industrial de Garín. Este curso no solo me brindó las herramientas y conocimientos necesarios para insertarme en el mercado laboral, sino que también me abrió las puertas a nuevas oportunidades.`,
            person: 'Luciana - Savio '
        },
        {
            url: manic,
            description: `Quiero agradecer a todos los que hicieron posible este curso. Está impartido por profesionales que fueron muy amables y simpáticos. A pesar de ser tan joven, comencé a trabajar en mi barrio y a generar mis propios ingresos.`,
            person: 'Camila - Garin'
        },
    ]

    return (
        <div id="reviews" className='p-6 md:p-12 bg-white flex flex-col'>
            <h2 className="mb-5 text-zinc-800 text-4xl md:text-5xl lg:text-6xl font-bold">Testimonios</h2>
            <h4 className="mb-4 text-gray-600 text-lg md:text-xl lg:text-2xl"></h4>
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