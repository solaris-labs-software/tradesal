import React from 'react';
import '/src/styles/variables.scss';

const Navbar = () => {
    const values = ['Home', 'About', 'Services', 'Contact'];
    return (
        <nav className='flex justify-between bg-primary py-5 align-middle'>
            <h1 className='text-white ml-5 text-2xl'>Logo</h1>
            <ul className='flex justify-end gap-10'>
                {
                    values.map((value, index) => {
                        return <button key={index} className='text-white mx-10'>{value}</button>
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;