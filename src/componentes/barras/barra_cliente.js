import { Link } from "react-router-dom"

const BarraCliente = ()=>{
    return(
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Barra de navegación cliente</title>
  <link rel="stylesheet" type="text/css" href="../estilos/estilos_barra.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" type="text/css" href="../styles/estilos_barra.css" />
  <script src="../scripts/scripts_cliente.js"></script>
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
          <a href className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer font-semibold transition-colors duration-300">
            <i className="fa fa-home mr-2" /> Inicio
          </a>
          <a href className="flex items-center text-yellow-600 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-box mr-2" /> Productos
          </a>
          <div className="relative">
            <Link id="reservas-button" className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
              <i className="fa fa-calendar mr-2" /> Reservas
            </Link>
            <div id="reservas-menu" className="dropdown-menu mt-2 rounded-lg shadow-lg bg-white">
              <Link to="#">Reserva local</Link>
              <Link to="#">Reserva mesa</Link>
            </div>
          </div>
          <a href className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-shopping-basket mr-2" /> Pedidos
          </a>
          <a href className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-calendar-check-o mr-2" /> Eventos
          </a>
          <a href className="flex items-center text-gray-900 hover:text-yellow-800 cursor-pointer transition-colors duration-300 font-semibold">
            <i className="fa fa-concierge-bell mr-2" /> Servicios
          </a>
        </div>
        {/* User and Cart Section */}
        <div className="flex items-center space-x-6">
          <Link className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Carrito" className="h-8 w-8" />
          </Link>
          <div className="relative">
            <button id="user-menu-button" className="flex items-center text-yellow-200 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-200 font-medium rounded-full p-2">
              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20c0-2.21 4-4 8-4s8 1.79 8 4v1H4v-1z" clipRule="evenodd" />
              </svg>
            </button>
            <div id="user-menu" className="dropdown-menu mt-2 rounded-lg shadow-lg bg-white">
              <Link to="#">Mi perfil</Link>
              <Link to="#">Cerrar sesión</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>

    )
}

export default BarraCliente;