import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const BarraCliente = () => {
  const [reservasMenuVisible, setReservasMenuVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const reservasMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleReservasMenu = () => {
    setReservasMenuVisible(prevState => !prevState);
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(prevState => !prevState);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(prevState => !prevState);
  };

  useEffect(() => {
    const closeMenus = (event) => {
      if (
        reservasMenuRef.current &&
        !reservasMenuRef.current.contains(event.target) &&
        !event.target.closest('#reservas-button')
      ) {
        setReservasMenuVisible(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        !event.target.closest('#user-menu-button')
      ) {
        setUserMenuVisible(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('#mobile-menu-button')
      ) {
        setMobileMenuVisible(false);
      }
    };

    document.addEventListener('click', closeMenus);

    return () => {
      document.removeEventListener('click', closeMenus);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-24">
        <div className="flex flex-col">
          <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-yellow-300" />
          <nav className="flex justify-between items-center py-4 navbar_gradient backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 h-24 px-8">
            {/* Logo Container */}
            <div className="flex items-center space-x-4 ml-2">
              <Link className="cursor-pointer flex items-center">
                <img className="h-20 object-cover" src="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" alt="logo-empresa-mila" />
              </Link>
            </div>
            {/* Button for mobile menu */}
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg lg:hidden hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`w-6 h-6 ${mobileMenuVisible ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <svg className={`w-6 h-6 ${mobileMenuVisible ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Links Section */}
            <div ref={mobileMenuRef} className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-2 lg:space-y-0 ${mobileMenuVisible ? 'flex' : 'hidden'}`}>
              {/* Imagen para modo pequeño */}
              <img src="https://via.placeholder.com/150" alt="Imagen adicional" className="block lg:hidden mx-auto mb-2 opacity-0" />
              <Link to="/" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer font-semibold no-underline transition-colors duration-300">
                <i className="fa fa-home mr-2" /> Inicio
              </Link>
              <Link to="#" className="flex items-center text-yellow-600 cursor-pointer no-underline transition-colors duration-300 font-semibold">
                <i className="fa fa-box mr-2" /> Productos
              </Link>
              
              <Link to="/inicioreserva" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer no-underline transition-colors duration-300 font-semibold">
                <i className="fa fa-calendar mr-2" /> Reservas
              </Link>
        
              <Link to="#" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer no-underline transition-colors duration-300 font-semibold">
                <i className="fa fa-shopping-basket mr-2" /> Pedidos
              </Link>
              <Link to="#" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer no-underline transition-colors duration-300 font-semibold">
                <i className="fa fa-calendar-check-o mr-2" /> Eventos
              </Link>
              <Link to="#" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer no-underline transition-colors duration-300 font-semibold">
                <i className="fa fa-concierge-bell mr-2" /> Servicios
              </Link>
            </div>
            {/* User and Cart Section */}
            <div className="flex items-center space-x-6">
              <Link className="flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Carrito" className="h-8 w-8" />
              </Link>
              <div className="relative">
                <button
                  id="user-menu-button"
                  onClick={toggleUserMenu}
                  className="flex items-center text-yellow-200 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-200 font-medium rounded-full p-2"
                >
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20c0-2.21 4-4 8-4s8 1.79 8 4v1H4v-1z" clipRule="evenodd" />
                  </svg>
                </button>
                {userMenuVisible && (
                  <div ref={userMenuRef} id="user-menu" className="dropdown-menu mt-2 rounded-lg shadow-lg bg-white">
                    <Link to="#">Mi perfil</Link>
                    <Link to="#">Cerrar sesión</Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BarraCliente;
