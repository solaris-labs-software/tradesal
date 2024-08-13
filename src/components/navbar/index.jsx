import React from 'react';
import '/src/styles/variables.scss';


const Navbar = () => {
    const values = ['Home', 'About', 'Services', 'Contact'];
    return (
        <div className='flex flex-col'>
            <nav className='flex justify-between bg-primary py-5 align-middle z-10 fixed w-[100vw]'>
                <h1 className='text-white ml-5 text-2xl primary-text-font font-bold'>TRADESAL</h1>
                <ul className='flex justify-end gap-10'>
                    {
                        values.map((value, index) => {
                            return <button key={index} className='text-white mx-10 text-xl primary-text-font'>{value}</button>
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;