const ConsultaReserva = () => {


  return(
<div>
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
<style dangerouslySetInnerHTML={{__html: "\n        /* Custom styles for intense gold color */\n        .border-gold-600 {\n            border-color: #FFC300; /* Intense Gold color */\n        }\n        .text-gold-600 {\n            color: #FFC300; /* Intense Gold color */\n        }\n    " }} />
<div className="max-w-[1200px] mx-auto">
  <div className="w-full flex justify-between items-center mb-3 mt-12 pl-3">
    <div>
      <h3 className="text-lg font-semibold text-slate-800">Reserva Local</h3>
      <p className="text-slate-500">Visualiza las reservas realizadas</p>
    </div>
    <div className="mx-3">
      <div className="relative w-full max-w-sm min-w-[200px]">
        <input className="w-full h-10 pr-11 pl-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 bg-white border border-gold-600 rounded shadow-sm transition duration-300 ease focus:outline-none focus:border-gold-600 focus:shadow-md hover:border-gold-600" placeholder="Busca la reserva" />
        <button className="absolute top-1 right-1 h-8 w-8 flex items-center bg-white rounded" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
    <table className="w-full text-left table-auto min-w-max">
      <thead>
        <tr className="border-b border-gold-600 bg-slate-50">
          <th className="p-4 text-sm font-normal text-slate-500">Nombre</th>
          <th className="p-4 text-sm font-normal text-slate-500">Celular</th>
          <th className="p-4 text-sm font-normal text-slate-500">Correo</th>
          <th className="p-4 text-sm font-normal text-slate-500">Documento</th>
          <th className="p-4 text-sm font-normal text-slate-500">Número de personas</th>
          <th className="p-4 text-sm font-normal text-slate-500">Fecha</th>
          <th className="p-4 text-sm font-normal text-slate-500">Hora</th>
          <th className="p-4 text-sm font-normal text-slate-500">Comentarios</th>
          <th className="p-4 text-sm font-normal text-slate-500">Decoracion</th>
          <th className="p-4 text-sm font-normal text-slate-500">Actividades</th>
          <th className="p-4 text-sm font-normal text-slate-500" />
        </tr>
      </thead>
      <tbody id="reservas-body">
        {/* Aquí se agregarán dinámicamente las reservas */}
      </tbody>
    </table>
  </div>
</div>
</div>

  )


}

export default ConsultaReserva;