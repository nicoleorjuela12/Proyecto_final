import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/estilos_barra.css'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faUsers, faCalendar, faShoppingBasket, faCalendarCheck, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

const BarraAdmin = () => {
    const [reservasMenuOpen, setReservasMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileReservasMenuOpen, setMobileReservasMenuOpen] = useState(false);

    const reservasRef = useRef(null);
    const userRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const mobileReservasRef = useRef(null);

    const toggleMenu = (menuState, setMenuState) => {
        setMenuState(!menuState);
    };

    const handleClickOutside = (e, ref, setMenuState) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setMenuState(false);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            handleClickOutside(e, reservasRef, setReservasMenuOpen);
            handleClickOutside(e, userRef, setUserMenuOpen);
            handleClickOutside(e, mobileMenuRef, setMobileMenuOpen);
            handleClickOutside(e, mobileReservasRef, setMobileReservasMenuOpen);
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mb-24">
            <div className="flex flex-col">
                <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-yellow-300"></div>
                <nav className="flex justify-between items-center py-4 navbar_gradient backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 h-24 px-8">
                    {/* Logo Container */}
                    <div className="flex items-center space-x-4 ml-2">
                        <Link to="/" className="cursor-pointer flex items-center">
                            <img className="h-20 object-cover" src="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" alt="logo-empresa-mila" />
                        </Link>
                    </div>

                    {/* Button for mobile menu */}
                    <button
                        id="mobile-menu-button"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg lg:hidden hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                        onClick={() => toggleMenu(mobileMenuOpen, setMobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div id="desktop-menu" className={`hidden lg:flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-2 lg:space-y-0`}>
                        <Link to="/" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer font-semibold transition-colors duration-300">
                            <FontAwesomeIcon icon={faHome} className="mr-2" /> Inicio
                        </Link>
                        <Link to="/productos" className="flex items-center text-yellow-600 cursor-pointer transition-colors duration-300 font-semibold">
                            <FontAwesomeIcon icon={faBox} className="mr-2" /> Productos
                        </Link>
                        <Link to="/usuarios" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
                            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Usuarios
                        </Link>

                        {/* Dropdown Reservas */}
                        <div className="relative">
                            <button
                                id="reservas-button"
                                className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold"
                                onClick={() => toggleMenu(reservasMenuOpen, setReservasMenuOpen)}
                            >
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Reservas
                            </button>
                            <div ref={reservasRef} className={`dropdown-menu mt-2 rounded-lg shadow-lg bg-white ${reservasMenuOpen ? 'show' : ''}`}>
                                <Link to="/reserva-local" className="block px-4 py-2">Reserva local</Link>
                                <Link to="/reserva-mesa" className="block px-4 py-2">Reserva mesa</Link>
                            </div>
                        </div>
                        <Link to="/pedidos" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
                            <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" /> Pedidos
                        </Link>
                        <Link to="/eventos" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
                            <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" /> Eventos
                        </Link>
                        <Link to="/servicios" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
                            <FontAwesomeIcon icon={faConciergeBell} className="mr-2" /> Servicios
                        </Link>
                    </div>

                    {/* User and Cart Section */}
                    <div className="flex items-center space-x-6">
                        <Link to="/carrito" className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Carrito" className="h-8 w-8" />
                        </Link>
                        <div className="relative">
                            <button
                                id="user-menu-button"
                                className="flex items-center text-yellow-200 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-200 font-medium rounded-full p-2"
                                onClick={() => toggleMenu(userMenuOpen, setUserMenuOpen)}
                            >
                                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20c0-2.21 4-4 8-4s8 1.79 8 4v1H4v-1z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <div ref={userRef} className={`dropdown-menu mt-2 rounded-lg shadow-lg bg-white ${userMenuOpen ? 'show' : ''}`}>
                                <Link to="/perfil" className="block px-4 py-2">Mi perfil</Link>
                                <Link to="/cerrar-sesion" className="block px-4 py-2">Cerrar sesión</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" ref={mobileMenuRef} className={`lg:hidden fixed top-24 left-0 right-0 bg-white shadow-lg z-50 ${mobileMenuOpen ? '' : 'hidden'}`}>
                <Link to="/" className="block px-4 py-2 text-gray-900 hover:bg-yellow-200">
                    <FontAwesomeIcon icon={faHome} className="mr-2" /> Inicio
                </Link>
                <Link to="/productos" className="block px-4 py-2 text-yellow-600 hover:bg-yellow-200">
                    <FontAwesomeIcon icon={faBox} className="mr-2" /> Productos
                </Link>
                <Link to="/usuarios" className="block px-4 py-2 text-gray-900 hover:bg-yellow-200">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" /> Usuarios
                </Link>
                <button
                    className="block px-4 py-2 text-gray-900 hover:bg-yellow-200"
                    onClick={() => toggleMenu(mobileReservasMenuOpen, setMobileReservasMenuOpen)}
                >
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Reservas
                </button>
                <div ref={mobileReservasRef} className={`dropdown-menu mt-2 rounded-lg shadow-lg bg-white ${mobileReservasMenuOpen ? '' : 'hidden'}`}>
                    <Link to="/reserva-local" className="block px-4 py-2">Reserva local</Link>
                    <Link to="/reserva-mesa" className="block px-4 py-2">Reserva mesa</Link>
                </div>
                <Link to="/pedidos" className="block px-4 py-2 text-gray-900 hover:bg-yellow-200">
                    <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" /> Pedidos
                </Link>
                <Link to="/eventos" className="block px-4 py-2 text-gray-900 hover:bg-yellow-200">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" /> Eventos
                </Link>
                <Link to="/servicios" className="block px-4 py-2 text-gray-900 hover:bg-yellow-200">
                    <FontAwesomeIcon icon={faConciergeBell} className="mr-2" /> Servicios
                </Link>
            </div>
        </div>
    );
};

export default BarraAdmin;
