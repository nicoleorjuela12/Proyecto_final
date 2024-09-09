
const InfoReserva = () => {

    return(
       <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Formulario de Reserva</title>
  <link rel="icon" type="image/png" href="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" />
  <link rel="stylesheet" href="../estilos/estilos reserva1.css" />
  <div className="background-overlay" />
  <div className="container-title">
    <header>
      <h1>Personaliza tu reserva</h1>
    </header>
  </div>
  <form id="reservation-form" action="./reservalocal.js" method="POST" onsubmit="saveReservationData();">
    <div className="reservation-form">
      {/* Contenedor para la selección del número de personas */}
      <div className="container select-people-container">
        <h2>Elige</h2>
        <p>Número de personas</p>
        <div className="people-selector">
          <button type="button" className="people-btn" onclick="changePeople(-1)">-</button>
          <span id="people-count" name="people_count">1</span>
          <button type="button" className="people-btn" onclick="changePeople(1)">+</button>
        </div>
      </div>
      {/* Contenedor para la selección de la fecha */}
      <div className="container select-date-container">
        <h2>Fecha</h2>
        <p>Selecciona las fechas disponibles</p>
        <input type="date" id="reservation-date" name="reservation_date" />
      </div>
      {/* Contenedor para la selección de la hora */}
      <div className="container select-time-container">
        <h2>Hora</h2>
        <p>Selecciona una hora disponible</p>
        <select id="time-selector" name="time_selector" onchange="selectTime(this.value)">
          {/* Las opciones serán generadas dinámicamente por JavaScript */}
        </select>
      </div>
      {/* Botón para continuar */}
      <button type="submit" className="continue-btn">Continuar</button>

    </div>
  </form>
</div>


    )
}

export default InfoReserva;