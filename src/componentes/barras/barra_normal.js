import { Link } from "react-router-dom"
const BarraNormal = ()=>{
    return(

        
<div>
<meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Barra de navegación mesero</title>
  <link rel="stylesheet" type="text/css" href="../styles/estilos_barra.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <div className="flex flex-col items-center justify-center mb-24">
    <div className="flex flex-col">
      {/* Page Scroll Progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-yellow-300" />
      <nav className="flex justify-between items-center py-4 navbar_gradient backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 h-24 px-8">
        {/* Logo Container */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link className="cursor-pointer flex items-center">
            <img className="h-20 object-cover" src="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" alt="logo-empresa-mila" />
          </Link>
        </div>
        {/* Links Section */}
        {/* Button for mobile menu */}
        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg lg:hidden hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-200">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {/* Links Section */}
        <div id="mobile-menu-2" className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-2 lg:space-y-0 ">
          {/* Imagen para modo pequeño */}
          <img src="https://via.placeholder.com/150" alt="Imagen adicional" className="block lg:hidden mx-auto mb-2 opacity-0" />
          <Link to  className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer font-semibold transition-colors duration-300">
            <i className="fa fa-home mr-2" /> Inicio
          </Link>
          <Link to  className="flex items-center text-yellow-600 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-box mr-2" /> Productos
          </Link>
          <div className="relative">
            <Link id="reservas-button" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
              <i className="fa fa-calendar mr-2" /> Reservas
            </Link>
            <div id="reservas-menu" className="dropdown-menu mt-2 rounded-lg shadow-lg bg-white">
              <Link to ="#">Reserva local</Link>
              <Link to ="#">Reserva mesa</Link>
            </div>
          </div>
          <Link to  className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-shopping-basket mr-2" /> Pedidos
          </Link>
          <Link to  className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-calendar-check-o mr-2" /> Eventos
          </Link>
          <Link to  className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-concierge-bell mr-2" /> Servicios
          </Link>
        </div>
        {/* User and Cart Section */}
        <div className="flex items-center space-x-6">
          <Link to ="./Formulario_registro/Formulario_registro.html" className="flex text-gray-600 hover:text-yellow-800
                      cursor-pointer transition-colors duration-300">
            <svg className="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={24} height={24} viewBox="0 0 24 24">
              <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
            </svg>
            Register
          </Link>
          {/* Login */}
          <Link to ="../login.html" className="flex text-gray-600 hover:text-yellow-800
                      cursor-pointer transition-colors duration-300">
            <svg className="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={24} height={24} viewBox="0 0 24 24">
              <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
            </svg>
            Login
          </Link>
        </div>
      </nav>
    </div>
  </div>
  </div>
  )


}
export default BarraNormal;