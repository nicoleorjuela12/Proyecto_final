
import { Link } from 'react-router-dom';

const ReservaLocal = () => {

    return(
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Formulario de Reserva local</title>
  <link rel="icon" type="image/png" href="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <link rel="stylesheet" type="text/css" href="../estilos/freservas.css" />
  <section className="min-h-screen">
    <div className="bg-image shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap gap-4 justify-center h-full">
      <form id="reservation-form" className="w-full flex flex-col gap-4 h-full" action method="post">
        <div className="flex-container mt-20 w-full h-full">
          {/* Primer formulario */}
          <div className="w-full md:w-1/2 px-4">
            <div className="form-container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
              <div className="bar bg-[#D2B48C] text-white flex items-center shadow-md rounded">
                <i className="fas fa-user icon mr-2" />
                <span className="font-bold uppercase">Datos del Usuario</span>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 mt-12">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-first-name-1">
                    <i className="fas fa-user icon mr-2" />
                    Nombre:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-first-name-1" type="text" />
                  <p className="text-red-500 text-xs italic">Datos de la persona que tiene la reserva</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-last-name-1">
                    <i className="fas fa-phone icon mr-2" />
                    Celular:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-last-name-1" type="text" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-password-1">
                    <i className="fas fa-envelope icon mr-2" />
                    Correo:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-password-1" type="email" />
                </div>
              </div>
            </div>
          </div>
          {/* Segundo formulario */}
          <div className="w-full md:w-1/2 px-4">
            <div className="form-container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto h-84">
              <div className="bar bg-[#D2B48C] text-white flex items-center shadow-md rounded">
                <i className="fas fa-comments icon mr-2" />
                <span className="font-bold uppercase">Información reserva</span>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 mt-12">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-first-name-2">
                    <i className="fas fa-users icon mr-2" />
                    Número personas:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-first-name-2" type="text" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-last-name-2">
                    <i className="fas fa-calendar icon mr-2" />
                    Fecha:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-last-name-2" type="date" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 mt-10">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-start-time">
                    <i className="fas fa-clock icon mr-2" />
                    Hora de inicio:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-start-time" type="time" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-end-time">
                    <i className="fas fa-clock icon mr-2" />
                    Hora de fin:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-end-time" type="time" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Información adicional */}
        <div className="w-full flex justify-center">
          <div className="form-container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-auto" style={{width: '90%'}}>
            <div className="bar bg-[#D2B48C] text-white flex items-center shadow-md rounded">
              <i className="fas fa-info-circle icon mr-2" />
              <span className="font-bold uppercase">Información adicional</span>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 mt-12">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-comments">
                  <i className="fas fa-comments icon mr-2" />
                  Comentarios:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-comments" type="text" required />
                <p className="text-red-500 text-xs italic">Puedes decir observaciones sobre tu reserva o el color de tu decoración</p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-services">
                  <i className="fas fa-cogs icon mr-2" />
                  Tipo de servicios
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-[#D2B48C] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-services" required>
                    <option value>Seleccione</option>
                    <option value="Licoreria">Licorería</option>
                    <option value="Decoracion">Decoración</option>
                    <option value="Iluminacion">Iluminación - Sonido</option>
                    <option value="Ninguno">Ninguno</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-image">
                  <i className="fas fa-image icon mr-2" />
                  Imagen de decoración
                </label>
                <input className="block w-full bg-gray-200 text-gray-700 border border-[#D2B48C] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]" id="grid-image" type="file" required />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input type="hidden" id="grid-status" name="estado_reserva" defaultValue="Confirmada" />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 hidden">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center" htmlFor="grid-tipo-reserva">
                  <i className="fas fa-tasks icon mr-2" />
                  Tipo Reserva
                </label>
                <div className="relative">
                  <select name="tipo_reserva" id="grid-tipo-reserva" className="block appearance-none w-full bg-gray-200 border border-[#D2B48C] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#D2B48C]">
                    <option value="reserva_local">Reserva local</option>
                    <option value="reserva_mesa" selected>Reserva mesa</option>
                  </select>
                </div>
              </div>
              {/* Casilla */}
              <div className="w-full flex justify-center mt-6 mb-6">
                <div className="center-checkbox">
                  <input type="checkbox" id="terms-checkbox" className="mr-2 leading-tight" required />
                  <label htmlFor="terms-checkbox" className="text-gray-700 text-xs font-bold">Acepto los <Link to="#" id="terms-link" className="text-[#D2B48C] underline">términos y condiciones</Link>.</label>
                </div>
              </div>
              <div className="w-full flex justify-center mt-6">
                <button id="submit-button" className="bg-[#D2B48C] hover:bg-[#D2B48C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out" type="submit">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/* Modal de términos y condiciones */}
  <div id="terms-modal" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center hidden">
    <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/5 xl:w-1/3 border-2 border-yellow-500 rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-center">Recomendaciones para Reservar Local</h2>
      <ul className="list-none mt-6">
        <li className="flex space-x-3">
          <i className="fas fa-check-circle text-yellow-500 text-xl" />
          <span className="text-gray-800 ml-4">Reserva con al menos 1 mes de anticipación para asegurar disponibilidad.</span>
        </li>
        <li className="flex space-x-3">
          <i className="fas fa-check-circle text-yellow-500 text-xl" />
          <span className="text-gray-800 ml-4">El local tiene capacidad para 50 personas; solo se reserva para grupos de más de 15.</span>
        </li>
        <li className="flex space-x-3">
          <i className="fas fa-check-circle text-yellow-500 text-xl" />
          <span className="text-gray-800 ml-4">Verifica las restricciones de horario y las normas del restaurante.</span>
        </li>
        <li className="flex space-x-3">
          <i className="fas fa-check-circle text-yellow-500 text-xl" />
          <span className="text-gray-800 ml-4">Presentar el correo de confirmación de la reserva al llegar.</span>
        </li>
        <li className="flex space-x-3">
          <i className="fas fa-check-circle text-yellow-500 text-xl" />
          <span className="text-gray-800 ml-4">Realizar un depósito para asegurar la reserva si es requerido.</span>
        </li>
      </ul>
      <div className="flex justify-center mt-4">
        <button id="close-modal" className="bg-[#D2B48C] text-white font-bold py-2 px-4 rounded">Cerrar</button>
      </div>
    </div>
  </div>
</div>

        



    )


}


export default ReservaLocal;