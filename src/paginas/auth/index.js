import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarraAdministrador from '../../componentes/barras/BarraAdministrador';
import BarraCliente from '../../componentes/barras/BarraCliente';
import BarraMesero from '../../componentes/barras/BarraMesero';
import BarraCommunity from '../../componentes/barras/BarraCommunity';
import BarraNormal from "../../componentes/barras/barra_normal";
import '../../index.css';
import Footer from "../../componentes/Footer/footer";

const Index = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el rol del usuario desde localStorage
    const role = localStorage.getItem('role');
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    // Eliminar el rol del localStorage y actualizar el estado
    localStorage.removeItem('role');
    setUserRole(null);
    navigate('/');  // Redirigir al inicio o página deseada
  };

  const renderBarra = () => {
    switch (userRole) {
      case 'administrador':
        return <BarraAdministrador />;
      case 'Cliente':
        return <BarraCliente />;
      case 'mesero':
        return <BarraMesero />;
      case 'Ccommunity_manager':
        return <BarraCommunity />;
      default:
        return <BarraNormal />;
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mila INDEX</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

      {/* Renderiza la barra correspondiente */}
      {renderBarra()}

      {/* Contenido de la página */}
      <div className="container mx-auto pt-5">
        {/* SERVICIOS */}
        <div className="relative text-center py-[115px] pb-[35px]">
          <h4 className="tracking-widest text-black">Nuestros Servicios</h4>
          <h1 className="text-4xl font-bold">Comida Fresca &amp; Natural</h1>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-[100px] bg-[#DA9F5B]" />
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-5">
            <div className="flex items-center">
              <div className="w-2/5">
                <img className="w-full mb-3 lg:mb-0" src="service-1.jpg" alt="Organización de Eventos" />
              </div>
              <div className="w-3/5 pl-4">
                <h4 className="text-xl"><i className="fa fa-calendar service-icon" />Organización de Eventos</h4>
                <p className="m-0">En Mila, ofrecemos un servicio de organización de eventos para hacer de tu ocasión especial un momento inolvidable. Nos encargamos de todos los detalles para que tú puedas disfrutar.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5">
            <div className="flex items-center">
              <div className="w-2/5">
                <img className="w-full mb-3 lg:mb-0" src="service-2.jpg" alt="Reservas" />
              </div>
              <div className="w-3/5 pl-4">
                <h4 className="text-xl"><i className="fa fa-book service-icon" />Reservas</h4>
                <p className="m-0">Facilitamos el proceso de reservas para que siempre tengas un lugar en nuestro restaurante. Ya sea para una cena con tu pareja o una reunión familiar, puedes reservar con antelación.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5">
            <div className="flex items-center">
              <div className="w-2/5">
                <img className="w-full mb-3 lg:mb-0" src="service-3.jpg" alt="Pedidos" />
              </div>
              <div className="w-3/5 pl-4">
                <h4 className="text-xl"><i className="fa fa-bullhorn service-icon" />Pedidos</h4>
                <p className="m-0">Realiza tus pedidos de manera rápida y sencilla a través de nuestro sistema en línea. Ofrecemos un servicio eficiente para que disfrutes de tus comidas favoritas sin complicaciones.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5">
            <div className="flex items-center">
              <div className="w-2/5">
                <img className="w-full mb-3 lg:mb-0" src="service-4.jpg" alt="Disfruta con la Familia" />
              </div>
              <div className="w-3/5 pl-4">
                <h4 className="text-xl"><i className="fa fa-utensils service-icon" />Productos</h4>
                <p className="m-0">En Mila, queremos que disfrutes momentos especiales con tu familia. Nuestro ambiente acogedor y nuestro menú variado son perfectos para pasar tiempo de calidad juntos y que realices diferentes pedidos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SOBRE NOSOTROS */}
        <div className="container mx-auto py-5">
          <div className="relative text-center py-[115px] pb-[35px]">
            <h4 className="tracking-widest text-black"><b>Sobre Nosotros</b></h4>
            <h1 className="text-4xl font-bold"><b>Sirviendo desde 2018</b></h1>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-[100px] bg-[#DA9F5B]" />
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 py-5">
              <h1 className="text-2xl mb-3">Nuestra Misión</h1>
              <p>En Luz Mila gastro fusión, nuestra misión es ofrecer una experiencia gastronómica única que combina la tradición culinaria con la innovación moderna. Nos comprometemos a utilizar ingredientes frescos y locales, preparados con pasión y creatividad, para deleitar a nuestros clientes con platos que celebran la riqueza de la cocina regional e internacional. Buscamos crear un ambiente acogedor y sofisticado donde cada visita sea memorable y cada plato cuente una historia.</p>
            </div>
            <div className="w-full lg:w-1/3 px-4 py-5 relative min-h-[500px]">
              <img className="absolute inset-0 w-full h-full object-cover" src="about.png" alt="Sobre Nosotros" />
            </div>
            <div className="w-full lg:w-1/3 px-4 py-5">
              <h1 className="text-2xl mb-3">Nuestra Visión</h1>
              <p>Ser reconocidos como el gastrobar de referencia en nuestra comunidad, famoso por nuestra cocina excepcional, nuestro servicio al cliente impecable y nuestro compromiso con la sostenibilidad. Aspiramos a expandir nuestra marca y abrir nuevas ubicaciones, manteniendo siempre nuestros valores de calidad y excelencia. Queremos ser un lugar donde las personas se reúnan para celebrar momentos especiales y disfrutar de una experiencia culinaria inigualable.</p>
              <h5 className="flex items-center mb-3"><i className="fa fa-check text-primary mr-2" />Los mejores servicios</h5>
              <h5 className="flex items-center mb-3"><i className="fa fa-check text-primary mr-2" />La mejor calidad en nuestras comidas</h5>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="container mx-auto pt-5">
          <div className="relative text-center py-[115px] pb-[35px]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-[100px] bg-[#DA9F5B]" />
          </div>
          <h1 className="text-4xl font-bold text-center font-serif my-4 shadow-md">Porque venir a Mila</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            <div className="border border-[#DA9F5B] shadow-lg rounded-lg p-5">
              <i className="fa fa-gift text-4xl text-[#DA9F5B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Gran Experiencia</h3>
              <p>Venir a Mila te garantiza una experiencia culinaria inigualable, con un ambiente acogedor y un servicio de primer nivel.</p>
            </div>
            <div className="border border-[#DA9F5B] shadow-lg rounded-lg p-5">
              <i className="fa fa-star text-4xl text-[#DA9F5B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Calidad en el Servicio</h3>
              <p>Ofrecemos un servicio excepcional, cuidando cada detalle para que tu visita sea memorable.</p>
            </div>
            <div className="border border-[#DA9F5B] shadow-lg rounded-lg p-5">
              <i className="fa fa-cocktail text-4xl text-[#DA9F5B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Menú Variado</h3>
              <p>Descubre nuestra oferta gastronómica variada y deliciosa, diseñada para satisfacer todos los gustos.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Botón de cierre de sesión */}
      {userRole && (
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      )}
    </div>
  );
};

export default Index;
