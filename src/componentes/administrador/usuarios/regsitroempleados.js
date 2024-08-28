import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

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
    estado:'Activo'
  });

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
      const response = await axios.post('http://localhost:3000/usuarios', formData);
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Tu registro se ha completado con éxito.',
        confirmButtonText: 'Aceptar'
      });
      console.log(response.data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al registrar. Inténtalo de nuevo.',
        confirmButtonText: 'Aceptar'
      });
      console.error('Error al registrar:', error);
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
                  <input id="telefono" name="telefono" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.telefono} onChange={handleChange} pattern="[0-9]{10,15}" title="Número de teléfono válido" required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="numero_documento" className="text-gray-700 font-semibold text-xs">Número de Documento</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-id-card text-gray-400" />
                  <input id="numero_documento" name="numero_documento" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.numero_documento} onChange={handleChange} pattern="[0-9]{8,12}" title="Número de documento válido (8-12 caracteres)" required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="tipo_documento" className="text-gray-700 font-semibold text-xs">Tipo de Documento</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-id-badge text-gray-400" />
                  <select id="tipo_documento" name="tipo_documento" className="pl-2 w-full outline-none border-none rounded-md text-sm" value={formData.tipo_documento} onChange={handleChange} required>
                    <option value="" disabled>Tipo de Documento</option>
                    <option value="Cedula de ciudadania">Cédula de Ciudadanía</option>
                    <option value="Cedula de extranjeria">Cédula de Extranjería</option>
                  </select>
                </div>
              </div>
              {/* Columna 2 (continuación) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="direccion" className="text-gray-700 font-semibold text-xs">Dirección</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-home text-gray-400" />
                  <input id="direccion" name="direccion" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="text" value={formData.direccion} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-gray-700 font-semibold text-xs">Correo Electrónico</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-envelope text-gray-400" />
                  <input id="email" name="email" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="contrasena" className="text-gray-700 font-semibold text-xs">Contraseña</label>
                <div className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full">
                  <i className="fas fa-lock text-gray-400" />
                  <input id="contrasena" name="contrasena" className="pl-2 w-full outline-none border-none rounded-md text-sm" type="password" value={formData.contrasena} onChange={handleChange} minLength={8} required />
                </div>
              </div>
              {/* Campos específicos de rol */}
              {formData.rol === 'community_manager' && (
                <div className="rol-specific rol-community_manager">
                  <label htmlFor="redes" className="text-gray-700 font-semibold text-xs">Redes sociales</label>
                  <div className="relative">
                    <select id="redes" name="redes" className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full pl-10" value={formData.redes} onChange={handleChange}>
                      <option value="" disabled>Selecciona una red</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Tiktok">Tiktok</option>
                    </select>
                    <i className="absolute left-2 top-1/2 transform -translate-y-1/2 fas fa-share-alt text-gray-500" />
                  </div>
                </div>
              )}
              {formData.rol === 'mesero' && (
                <div className="rol-specific rol-mesero">
                  <label htmlFor="horario" className="text-gray-700 font-semibold text-xs">Horario preferido</label>
                  <div className="relative">
                    <select id="horario" name="horario" className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full pl-10" value={formData.horario} onChange={handleChange}>
                      <option value="" disabled>Selecciona un turno</option>
                      <option value="Mañana">Mañana</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Noche">Noche</option>
                    </select>
                    <i className="absolute left-2 top-1/2 transform -translate-y-1/2 fas fa-clock text-gray-500" />
                  </div>
                </div>
              )}
              {formData.rol === 'administrador' && (
                <div className="rol-specific rol-administrador">
                  <label htmlFor="titulo" className="text-gray-700 font-semibold text-xs">Título</label>
                  <div className="relative">
                    <input type="text" id="titulo" name="titulo" className="flex items-center border-2 border-yellow-300 py-1 px-2 rounded-md w-full pl-10" value={formData.titulo} onChange={handleChange} />
                    <i className="absolute left-2 top-1/2 transform -translate-y-1/2 fas fa-tag text-gray-500" />
                  </div>
                </div>
              )}
              {/* Botón de Enviar */}
              <div className="flex items-center space-x-2 col-span-2 justify-center">
                <button type="submit" className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioRegiEmp;
