import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert
import Footer from "../../componentes/Footer/footer";

const Login = () => {
    const [formData, setFormData] = useState({
        numero_documento: '',
        contrasena: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:3000/usuarios', {
                params: {
                    numero_documento: formData.numero_documento,
                    contrasena: formData.contrasena
                }
            });

            const user = response.data[0];
            if (user) {
                if (user.estado === 'Activo') {
                    localStorage.setItem('userId', user.id);
                    localStorage.setItem('role', user.rol);
                    localStorage.setItem('name', user.nombre);

                    // Muestra un mensaje de éxito con SweetAlert
                    Swal.fire({
                        title: '¡Bienvenido!',
                        text: `Hola ${user.nombre}, has iniciado sesión correctamente.`,
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    }).then(() => {
                        navigate('/'); // Navega a la página principal o dashboard
                    });
                } else {
                    Swal.fire({
                        title: 'Cuenta inactiva',
                        text: 'Tu cuenta no está activa. Contacta con soporte.',
                        icon: 'warning',
                        confirmButtonText: 'Entendido'
                    });
                }
            } else {
                Swal.fire({
                    title: 'Error de autenticación',
                    text: 'Número de documento o contraseña incorrectos. Inténtalo de nuevo.',
                    icon: 'error',
                    confirmButtonText: 'Reintentar'
                });
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            Swal.fire({
                title: 'Error del sistema',
                text: 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo más tarde.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
        }
    };

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" href="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" />
            <title>Iniciar Sesión</title>
            <link href="../../index.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                {/* Left: Image */}
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://i.ibb.co/Y3GKdC1/Conoce-nuestros-espacios-Co-working.jpg" alt="IMAGEN" className="object-cover w-full h-full rounded-l-lg shadow-lg" />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h1>
                    <form id="login-form" onSubmit={handleSubmit}>
                        {/* Documento Input with Icon */}
                        <div className="mb-5 flex items-center border-b border-yellow-500 pb-2">
                            <i className="fas fa-id-card text-yellow-500 mr-2" />
                            <input
                                type="text"
                                id="numero_documento"
                                name="numero_documento"
                                placeholder="Ingrese su número de documento"
                                className="w-full border-0 focus:outline-none"
                                autoComplete="off"
                                value={formData.numero_documento}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Password Input with Icon */}
                        <div className="mb-5 flex items-center border-b border-yellow-500 pb-2">
                            <i className="fas fa-lock text-yellow-500 mr-2" />
                            <input
                                type="password"
                                id="contrasena"
                                name="contrasena"
                                placeholder="Ingrese su contraseña"
                                className="w-full border-0 focus:outline-none"
                                autoComplete="off"
                                value={formData.contrasena}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Remember Me Checkbox */}
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-yellow-500 focus:ring-yellow-500" />
                            <label htmlFor="remember" className="text-gray-600 ml-2">Recordarme</label>
                        </div>
                        {/* Forgot Password Link */}
                        <div className="mb-6 text-gray-900 text-right">
                            <Link to="#" className="hover:underline text-sm flex items-center justify-end">
                                <i className="fas fa-lock text-black mr-2" />¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        {/* Login Button with Thin Black Border */}
                        <button type="submit" className="bg-yellow-500 border border-black text-black font-semibold rounded-md py-2 px-4 w-full transition duration-150 ease-in-out hover:bg-yellow-600 hover:text-white">
                            Acceder
                        </button>
                    </form>
                    {/* Sign up Link */}
                    <div className="mt-6 text-gray-900 text-center">
                        <Link to="./registrocliente.js" className="hover:underline text-sm flex items-center justify-center">
                            <i className="fas fa-user-plus text-black mr-2" />Si no tienes cuenta "Regístrate aquí"
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
