import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext'; // Asegúrate de que la ruta sea correcta
import Index from "./paginas/auth/index";
import Login from './componentes/auth/Login';
import BarraAdmin from './componentes/barras/BarraAdministrador';
import BarraCliente from './componentes/barras/BarraCliente';
import BarraMesero from './componentes/barras/BarraMesero';
import BarraCommunity from './componentes/barras/BarraCommunity';
import FormularioRegistro from './componentes/auth/RegistroCliente';
import BarraNormal from "./componentes/barras/barra_normal";
import ConsultaUsuarios from "./componentes/administrador/usuarios/consultausarios";
import Footer from "./componentes/Footer/footer";
import InfoReserva from "./componentes/cliente/reservas/infro reserva";
import Reservas from "./componentes/cliente/reservas/inicioreserva";
import ReservaLocal from "./componentes/cliente/reservas/reservalocal";
const App = () => {
  const userRole = localStorage.getItem('role');

  const renderBarra = () => {
    switch (userRole) {
      case 'admnistrador':
        return <BarraAdmin />;
      case 'Cliente':
        return <BarraCliente />;
      case 'mesero':
        return <BarraMesero />;
      case 'community_manager':
        return <BarraCommunity />;
      default:
        return <BarraNormal/>; 
    }
  };

  return (
    <UserProvider>
      <Fragment>
        <Router>
          {renderBarra()}
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/RegistroCliente" element={<FormularioRegistro />} />
            <Route ath="/consultausarios" element={<ConsultaUsuarios />} />
            <Route ath="/footer" element={<Footer />} />
            <Route ath="/infro reserva" element={<InfoReserva />} />
            <Route ath="/inicioreserva" element={<Reservas />} />
            <Route ath="/reservalocal" element={<ReservaLocal />} />

          </Routes>
        </Router>
      </Fragment>
    </UserProvider>
  );
};

export default App;
