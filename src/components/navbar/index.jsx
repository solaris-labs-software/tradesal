import React from 'react';
import '/src/styles/variables.scss';
import Presentation from '../common/presentation';

const Navbar = () => {
    const values = ['Home', 'About', 'Services', 'Contact'];
    return (
        <>
            <nav className='flex justify-between bg-primary py-5 align-middle'>
                <h1 className='text-white ml-5 text-2xl primary-text-font'>TRADESAL</h1>
                <ul className='flex justify-end gap-10'>
                    {
                        values.map((value, index) => {
                            return <button key={index} className='text-white mx-10 text-xl primary-text-font'>{value}</button>
                        })
                    }
                </ul>
            </nav>
            <Presentation title='CURSOS Y CAPACITACIONES' text='"Impulsa tu futuro con cada aprendizaje"' />
        </>
    );
};

export default Navbar;