import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../componentes/Footer/footer'


const FormularioRegiEmp = () => {
  const [formData, setFormData] = useState({
    rol: '',
    nombre: '',
    telefono: '',
    numero_documento: '',
    tipo_documento: '',
    direccion: '',
    email: '',
    contrasena: '',
    redes: '',
    horario: '',
    titulo: '',
    estado: 'Activo'
  });

  const navigate = useNavigate(); // Para redireccionar al usuario después del registro

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verificar si el usuario ya está registrado
      const emailResponse = await axios.get(`http://localhost:3000/usuarios?email=${encodeURIComponent(formData.email)}`);
      const existingEmails = emailResponse.data;

      const documentoResponse = await axios.get(`http://localhost:3000/usuarios?numero_documento=${encodeURIComponent(formData.numero_documento)}`);
      const existingDocumentos = documentoResponse.data;

      if (existingEmails.length > 0 || existingDocumentos.length > 0) {
        // Usuario ya registrado
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El usuario ya está registrado. Por favor, usa otro correo electrónico o número de documento.',
        });

        // Limpiar el formulario
        setFormData({
          rol: '',
          nombre: '',
          telefono: '',
          numero_documento: '',
          tipo_documento: '',
          direccion: '',
          email: '',
          contrasena: '',
          redes: '',
          horario: '',
          titulo: '',
          estado: 'Activo'
        });
      } else {
        // Enviar los datos del formulario
        const registerResponse = await axios.post('http://localhost:3000/usuarios', formData);

        if (registerResponse.status === 201) {
          // Registro exitoso
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Registro completado exitosamente.',
          }).then(() => {
            // Redirigir al usuario a la página de inicio usando useNavigate
            navigate('/consultausarios'); // Redirige a la página de inicio
          });
        } else {
          // Problema con el registro
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema con el registro.',
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema con la verificación del usuario.',
      });
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" />
      <title>Página de Registro -- Mila GastroFusion</title>
      <link rel="stylesheet" type="text/css" href="../estilos/estilos_barra.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <style dangerouslySetInnerHTML={{ __html: `
        .espacio_imagen1 {
          background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),url(https://i.ibb.co/j5LRZmB/Captura-de-pantalla-2024-07-29-135007.png) center center;
        }

        .imagen_formulario {
          background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)),url(https://i.ibb.co/nRVNh1H/En-mila-nuestras-tardes-se-ven-asi-ya-nos-conoces.jpg) center center;
        }

        .rol-specific {
          display: none;
        }

        #rol_community_manager:checked ~ .rol-community_manager,
        #rol_mesero:checked ~ .rol-mesero,
        #rol_administrador:checked ~ .rol-administrador {
          display: block;
        }
      `}} />
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Imagen de fondo */}
        <div className="hidden lg:flex w-full lg:w-1/2 espacio_imagen1 justify-around items-center">
          <div className="bg-black opacity-20 inset-0 z-0" />
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6 mb-4">
            <h1 className="text-white font-bold text-4xl font-sansc ml-28 font-normal text-yellow-300">Beneficios de Registrarse</h1>
            <ul className="text-white list-inside ml-20 text-1xl font-normal ml-28">
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Invitaciones a Eventos Especiales</li>
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Notificaciones y Recordatorios</li>
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Podrás realizar tus reservas y cotizaciones</li>
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Obtendrás descuentos al realizar tu pedido en línea</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center imagen_formulario space-y-4 p-4 lg:p-6">
          <div className="w-full max-w-2xl px-4 lg:px-6">
            <form id="registerForm" onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 lg:p-6 space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border border-gray-200">
              <h1 className="text-gray-800 font-bold text-2xl col-span-2 text-center mb-0 pb-0">¡Regístrate!</h1>
              <p className="text-xs font-normal text-gray-600 col-span-2 text-center mb-0 pb-0">Ingresa tus datos personales</p>
              {/* Campo de selección de rol */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="rol" className="text-gray-700 font-semibold text-xs">Rol</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <select id="rol" name="rol" className="pl-2 w-full outline-none border-none rounded-md text-sm" value={formData.rol} onChange={handleChange} required>
                    <option value="" disabled>Selecciona tu rol</option>
                    <option value="community_manager">Community Manager</option>
                    <option value="mesero">Mesero</option>
                    <option value="administrador">Administrador</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="nombre" className="text-gray-700 font-semibold text-xs">Nombre</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-user text-gray-400" />
                  <input id="nombre" name="nombre" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.nombre} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="telefono" className="text-gray-700 font-semibold text-xs">Teléfono</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-phone text-gray-400" />
                  <input id="telefono" name="telefono" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.telefono} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="numero_documento" className="text-gray-700 font-semibold text-xs">Número de Documento</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-id-card text-gray-400" />
                  <input id="numero_documento" name="numero_documento" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.numero_documento} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="tipo_documento" className="text-gray-700 font-semibold text-xs">Tipo de Documento</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-list text-gray-400" />
                  <select 
                    id="tipo_documento" 
                    name="tipo_documento" 
                    className="pl-2 w-full outline-none border-none rounded-md text-sm" 
                    value={formData.tipo_documento} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled>Selecciona el tipo de documento</option>
                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="direccion" className="text-gray-700 font-semibold text-xs">Dirección</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-map-marker-alt text-gray-400" />
                  <input id="direccion" name="direccion" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.direccion} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-gray-700 font-semibold text-xs">Email</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-envelope text-gray-400" />
                  <input id="email" name="email" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="contrasena" className="text-gray-700 font-semibold text-xs">Contraseña</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-lock text-gray-400" />
                  <input id="contrasena" name="contrasena" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="password" value={formData.contrasena} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="redes" className="text-gray-700 font-semibold text-xs">Redes Sociales</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-share-alt text-gray-400" />
                  <select 
                    id="redes" 
                    name="redes" 
                    className="pl-2 w-full outline-none border-none rounded-md text-sm" 
                    value={formData.redes} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Facebook">Facebook</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="horario" className="text-gray-700 font-semibold text-xs">Horario</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-clock text-gray-400" />
                  <select 
                    id="horario" 
                    name="horario" 
                    className="pl-2 w-full outline-none border-none rounded-md text-sm" 
                    value={formData.horario} 
                    onChange={handleChange} 
                    
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Mañana">Mañana</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noche">Noche</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="titulo" className="text-gray-700 font-semibold text-xs">Título</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-tag text-gray-400" />
                  <input id="titulo" name="titulo" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.titulo} onChange={handleChange} />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <input 
                  type="hidden" 
                  id="estado" 
                  name="estado" 
                  value="Activo" 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <button type="submit" className="bg-yellow-400 text-white py-2 px-4 rounded-md col-span-2">Registrar</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FormularioRegiEmp;
