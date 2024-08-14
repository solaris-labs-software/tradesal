import React, { useState } from 'react';
import '/src/styles/variables.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const values = [
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Cursos', href: '#cursos' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contacto', href: '#contacto' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col'>
            <nav className='flex justify-between items-center bg-blue-600 px-10 align-middle z-10 fixed w-[100vw]'>
                <div className='flex items-center'>
                    <img className='w-20 h-20'src="/src/assets/logo.png" alt="" />
                    <h1 className='text-white text-2xl primary-text-font font-bold'>TRADESAL</h1>
                </div>
                
                <div className='md:hidden' onClick={toggleMenu}>
                    {isOpen ? <FaTimes className='cursor-pointer text-white text-2xl' /> : <FaBars className='cursor-pointer text-white text-2xl' />}
                </div>
                <ul className={`flex-col md:flex md:flex-row md:justify-end md:gap-10 ${isOpen ? 'flex' : 'hidden'} fixed md:static bg-blue-600 top-16 left-0 w-full md:w-auto p-5 md:p-0`}>
                    {
                        values.map((value, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={value.href}
                                        className='text-white hover:text-blue-100 text-xl primary-text-font mb-4 md:mb-0'
                                        onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace
                                    >
                                        {value.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
