import React from 'react';
import '/src/styles/variables.scss';

const Presentation = ({ title, text }) => {
    return (
        <section className="relative h-screen flex flex-col justify-center p-8 md:p-[60px]">
            <div className="w-full md:w-[75%] lg:w-[50%]">
                <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold primary-text-font leading-tight'>
                    {title}
                </h1>
                <blockquote
                    className='text-white text-2xl md:text-3xl lg:text-4xl italic primary-text-font mt-4 md:mt-6 lg:mt-8 border-l-4 border-blue-600 pl-4'>
                    {`${text}`}
                </blockquote>
            </div>
        </section>
    );
};

export default Presentation;
