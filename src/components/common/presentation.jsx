import React from 'react';
import '/src/styles/variables.scss';

const Presentation = ({ title, text }) => {
    return (
        <div className="relative bg-cover bg-center w-full h-52 flex justify-center items-center">
            <div
                className="absolute inset-0 bg-black opacity-95"
                style={{
                    backgroundImage: 'url(/src/assets/bg-presentation.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(70%)', // Darken the background
                }}
            ></div>
            <div className="relative z-1 flex flex-col items-center">
                <h1 className='text-white text-6xl font-bold mb-5 primary-text-font'>{title}</h1>
                <p className='text-white text-xl primary-text-font'>{text}</p>
            </div>
        </div>
    );
};

export default Presentation;
