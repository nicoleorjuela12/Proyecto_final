import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert
import Footer from "../../componentes/Footer/footer";

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    numero_documento: '',
    tipo_documento: '',
    direccion: '',
    barrio: '',
    email: '',
    contrasena: '',
    rol: 'Cliente',
    estado: 'Activo'
  });

  const navigate = useNavigate(); // Define useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verificar si el usuario ya está registrado
      const response = await axios.get(`http://localhost:3000/usuarios?email=${encodeURIComponent(formData.email)}`);
      const existingEmails = response.data;

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
          nombre: '',
          telefono: '',
          numero_documento: '',
          tipo_documento: 'Cedula de ciudadania',
          direccion: '',
          barrio: '',
          email: '',
          contrasena: ''
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
            navigate('/'); // Redirige a la página de inicio
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
      <title>Pagina de Registro -- Mila GastroFusion</title>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="../estilos/estilos_barra.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />         
      <style>
        {`
          .espacio_imagen1 {
            background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),url(https://i.ibb.co/j5LRZmB/Captura-de-pantalla-2024-07-29-135007.png) center center;
          }

          .imagen_formulario {
            background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)),url(https://i.ibb.co/nRVNh1H/En-mila-nuestras-tardes-se-ven-asi-ya-nos-conoces.jpg) center center;
          }

          body {
            font-family: 'Lato', sans-serif; 
          }
        `}
      </style>
      <div className="h-screen flex flex-col lg:flex-row mt-0">
        {/* Imagen de fondo */}
        <div className="hidden lg:flex w-full lg:w-1/2 espacio_imagen1 justify-around items-center">
          <div className="bg-black opacity-20 inset-0 z-0" />
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6 mb-4">
            <h1 className="text-white font-bold text-4xl font-sansc ml-28 font-normal text-yellow-300">Beneficios de Registrarse</h1>
            <ul className="text-white list-style-type: none list-inside ml-20 padding-bottom-36 text-1xl font-normal ml-28">
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Invitaciones a Eventos Especiales</li>
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Notificaciones y Recordatorios</li>
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Podras realizar tus reservas y cotizaciones</li>
              <li><i className="fa-solid fa-check" style={{color: '#FFD43B', marginRight: '3%'}} />Obtendras descuentos al realizar tu pedido en linea</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center imagen_formulario space-y-4 p-4 lg:p-6">
          <div className="w-full max-w-2xl px-4 lg:px-6">
            <form id="registerForm" action="http://localhost:3000/usuarios" onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 lg:p-6 space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border border-gray-200">
              <h1 style={{marginBottom: 0, paddingBottom: 0}} className="text-gray-800 font-bold text-2xl col-span-2 text-center mb-0 pb-0">¡Regístrate!</h1>
              <p style={{marginBottom: 0, paddingBottom: 0}} className="text-xs font-normal text-gray-600 col-span-2 text-center mb-0 pb-0">Ingresa tus datos personales</p>
              {/* Columna 1 */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="nombre" className="text-gray-700 font-semibold text-xs">Nombre</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-user text-gray-400" />
                  <input id="nombre" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="telefono" className="text-gray-700 font-semibold text-xs">Teléfono</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-phone text-gray-400" />
                  <input id="telefono" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" name="telefono" pattern="[0-9]{10,15}" title="Número de teléfono válido" value={formData.telefono} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="numero_documento" className="text-gray-700 font-semibold text-xs">Número de Documento</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-id-card text-gray-400" />
                  <input id="numero_documento" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" name="numero_documento" pattern="[0-9]{8,12}" title="Número de documento válido (8-12 caracteres)" value={formData.numero_documento} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="tipo_documento" className="text-gray-700 font-semibold text-xs">Tipo de Documento</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-id-card-alt text-gray-400" />
                  <select id="tipo_documento" className="pl-2 w-full outline-none border-none rounded-md text-sm" name="tipo_documento" value={formData.tipo_documento} onChange={handleChange} required>
                    <option value="">Selecciona una opción</option>
                    <option value="Cedula de ciudadania">Cédula de ciudadanía</option>
                    <option value="Cedula de extranjeria">Cédula de extranjería</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="NIT">NIT</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
              {/* Columna 2 */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="direccion" className="text-gray-700 font-semibold text-xs">Dirección</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-map-marker-alt text-gray-400" />
                  <input id="direccion" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="barrio" className="text-gray-700 font-semibold text-xs">Barrio</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-building text-gray-400" />
                  <input id="barrio" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" name="barrio" value={formData.barrio} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-gray-700 font-semibold text-xs">Correo Electrónico</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-envelope text-gray-400" />
                  <input id="email" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="contrasena" className="text-gray-700 font-semibold text-xs">Contraseña</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-lock text-gray-400" />
                  <input id="contrasena" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} required />
                </div>
              </div>

              <div class="hidden">
                <label for="rol" class="text-gray-700 font-semibold text-xs">Rol</label>
                <div class="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i class="fas fa-user-tag text-gray-400"></i>
                  <select id="rol" class="pl-2 w-full outline-none border-none rounded-md text-sm" name="rol" required>
                    <option value="Cliente" selected>Cliente</option>
                    <option value="Mesero">Mesero</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Community Manager">Community Manager</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2 flex justify-center">
                <button type="submit" className="text-center w-full bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-4 rounded-md text-lg">Registrarse</button>
              </div>
              <p className="text-xs text-center col-span-2">¿Ya tienes una cuenta? <Link to="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold">Iniciar sesión</Link></p>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FormularioRegistro;
