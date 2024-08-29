
import { Link } from 'react-router-dom';

const Reservas = () => {

    return(

       <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            background-color: #c5c3c3; /* Fondo gris claro */\n        }\n        .card {\n            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1); /* Sombra */\n            border-radius: 10px; /* Bordes redondeados */\n        }\n        .card-img-top {\n            transition: 0.3s ease;\n        }\n        .card-img-top:hover {\n            filter: brightness(70%); /* Oscurecer imagen al hacer hover */\n        }\n        .card-body {\n            background: linear-gradient(to bottom right, #ffffff, #ccc9c9); /* Degradado suave */\n            padding: 20px;\n            border-radius: 10px;\n        }\n        .btn {\n            background-color: gold; \n            border: 2px solid rgb(153, 153, 153); \n            color: black;\n        }\n    " }} />
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="d-flex">
      <div className="card mx-2" style={{width: '24rem'}}>
        <img src="https://images.unsplash.com/photo-1671197346374-9d03a2a33a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9uZG9zJTIwbWVzYXMlMjBkaWZ1bWluYWRvfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Reservar Mesa</h5>
          <p className="card-text">Haz una reserva rápida para asegurar tu mesa en nuestro restaurante. Completa el formulario y detalla la información.</p>
          <Link to="./infro reserva.js" className="btn">Ir al formulario</Link>
        </div>
      </div>
      <div className="card mx-2" style={{width: '24rem'}}>
        <img src="https://media.istockphoto.com/id/1903775074/es/foto/fondo-borroso-de-la-cafeter%C3%ADa-con-luces-nocturnas-bokeh.webp?b=1&s=612x612&w=0&k=20&c=-8tIHdPMSmRVw9m4ckyFm82hxhx6pDvqwNjWfZ3j6tg=" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Reservar Local</h5>
          <p className="card-text">Planifica tu evento especial reservando nuestro local. Completa el formulario para detallar la informacion de la reserva.</p>
          <Link to="#" className="btn">Ir al formulario</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    )

}


export default Reservas;
