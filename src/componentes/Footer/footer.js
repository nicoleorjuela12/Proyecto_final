const Footer = () => {

    return(
       <div>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />
  {/* Footer */}
  <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#fff8e7'}}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-between p-4 text-white" style={{ background: 'linear-gradient(to right, #f7e199, #f7e1ae, #fbe49d)'}}
>    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold">Por qué nosotros?</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: 'gold', height: 4}} />
            <div>
              <p>Mila Gastro Fusión se destaca por su innovadora fusión culinaria, utilizando ingredientes frescos
                y locales para <br /> ofrecer una experiencia gastronómica única en un ambiente elegante y acogedor. Su enfoque en la personalización 
                de los platos <br /> y un servicio al cliente excepcional, junto con su  compromiso con la  sostenibilidad <br /> y la innovación, lo convierten
                en una opción distintiva para quienes buscan algo especial.</p>
            </div>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Siguenos en nuestras redes sociales!</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: 'gold', height: 4}} />
            <p>
              <a href="https://www.facebook.com/MilaGastroFusion/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300 transition duration-300" style={{textDecoration: 'none'}}>
                <i className="bi bi-facebook mr-2" /> Facebook
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/milagastrofusion/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300 transition duration-300" style={{textDecoration: 'none'}}>
                <i className="bi bi-instagram mr-2" /> Instagram
              </a>
            </p>
            <p>
              <a href="https://www.tiktok.com/@milagastrobar?lang=es" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300 transition duration-300" style={{textDecoration: 'none'}}>
                <i className="bi bi-tiktok mr-2" /> TikTok </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Horarios de atencion</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, background: 'linear-gradient(to right, #f7e199, #f7e1ae, #fbe49d)', height: 4, border: 'none'  // Añadido para eliminar el borde predeterminado
  }}  />
            <p>
            </p><div>
              <p className="mb-4 mt-0 d-inline-block mx-auto"><span className="font-bold">Lunes:</span> Cerrado</p>
              <p className="mb-4 mt-0 d-inline-block mx-auto"><span className="font-bold">Mar-Miér:</span> 9:00 AM - 10:00 PM</p>
              <p className="mb-4 mt-0 d-inline-block mx-auto"><span className="font-bold">Jue-Vie:</span> 9:00 AM - 10:00 PM</p>
              <p className="mb-4 mt-0 d-inline-block mx-auto"><span className="font-bold">Sáb-Dom:</span> 3:00 PM - 10:00 PM</p>
            </div>
            <p />
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Informacion de contacto</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: 'gold', height: 4}} />
            <div>
              <p className="text-black">Dirección: Carrera 13 #52 - 10, Bogota, Colombia</p>
              <p className="text-black">Número de contacto: +57 3124875578</p>
              <a href="mailto:mila1228@gmail.com" className="text-black hover:underline">Correo: mila1228@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2024 Mila Gastro Fusión. Todos los derechos reservados --- EPNI Industrion
    </div>
    {/* Copyright */}
  </footer>
</div>

    )
}


export default Footer;