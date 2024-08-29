import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarraAdmin from "../../barras/BarraAdministrador";
import Swal from 'sweetalert2'; // Importar SweetAlert2
import '../../../styles/estilos_tabla.css';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import Footer from'../../../componentes/Footer/footer';

const ConsultaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    // Obtener el rol del usuario desde localStorage
    const role = localStorage.getItem('role');
    setUserRole(role);

    // Fetch data from the API
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/usuarios'); // Asegúrate de ajustar la URL a la de tu API
        setUsuarios(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  const handleEliminar = async (usuarioId) => {
    try {
      // Mostrar el alerta de confirmación
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "Una vez eliminado, no podrás recuperar este usuario!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'Cancelar'
      });

      // Si el usuario confirma la eliminación
      if (result.isConfirmed) {
        await axios.put(`http://localhost:3000/usuarios/${usuarioId}`, { estado: 'Inactivo' });
        // Actualiza la lista de usuarios después de la eliminación
        setUsuarios(usuarios.map(usuario =>
          usuario.id === usuarioId ? { ...usuario, estado: 'Inactivo' } : usuario
        ));
        // Mostrar un mensaje de éxito
        Swal.fire(
          'Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        );
      }
    } catch (error) {
      console.error('Error updating usuario:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  // Filtrar usuarios según el rol del usuario actual
  const filteredUsuarios = usuarios.filter(usuario => {
    if (userRole === 'administrador' || userRole === 'mesero' || userRole === 'community_manager') {
      return usuario.rol === 'administrador' || usuario.rol === 'mesero' || usuario.rol === 'community_manager';
    }
    return false; // Si el rol del usuario actual no permite la visualización, no se muestran usuarios
  });

  return (
    <div>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/png" href="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" />
      {/* Estilos barra */}
      <link rel="stylesheet" type="text/css" href="../estilos/estilos tabla usuarios.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mostrar Registros</title>
      <BarraAdmin />
      <div className="table-container">
        <button type="button" className="btn btn-primary" onClick={() => navigate('/regsitroempleados')}>Agregar Usuario</button>
        <h1 className="title">Lista de Registros</h1>
        <table id="registrosTable">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Número de Documento</th>
              <th>Tipo de Documento</th>
              <th>Dirección</th>
              <th>Barrio</th>
              <th>Correo Electrónico</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nombre}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.numero_documento}</td>
                <td>{usuario.tipo_documento}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.barrio}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td>
                  {usuario.estado === 'Activo' && (
                    <button onClick={() => handleEliminar(usuario.id)}>Eliminar</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default ConsultaUsuarios;
