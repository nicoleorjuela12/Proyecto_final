import { Link } from "react-router-dom";
import BarraNormal from "../../componentes/barras/barra_normal";

const Index = ()=> {
    return(
        <div>
  <meta charSet="UTF-8" />
  <link rel="icon" type="image/png" href="https://i.ibb.co/gj0Bpcc/logo-empresa-mila.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <title>Mila-- gastroFusión</title>
  <link rel="stylesheet" type="text/css" href="../estilos/estilos barracliente.css" />
  {/* Estilos barra */}
  <link rel="stylesheet" type="text/css" href="../estilos/estilos_barra.css" />
  <style dangerouslySetInnerHTML={{__html: "\n            body {\n                font-family: 'Lato', sans-serif; \n            }\n        " }} />
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="../estilos/diseño.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />  
  <div id="navbar" />
  <BarraNormal />
  <section className="mt-24 ">
    {/*CARRUSEL*/}
    <div className="container mt-24">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="https://editorial.foodandwineespanol.com/wp-content/uploads/2024/04/especias-perfectas-para-cocteleria-mixologia.webp" className="d-block w-100 h-100   carousel-img" alt="imagen 1" />
            <div className="carousel-caption absolute bottom-0 left-0 right-0 bg-black bg-opacity-50  text-white p-4">
              <h5 className="text-2xl font-bold">Cocteleria - Bar</h5>
              <p className="text-1xl font-bold">Somos un bar de lunes a domingo de 6 a 11 pm</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.hellofresh.com/es/cms/SEO/recipes/gourmet/entrecot-de-ternera.jpeg" className="d-block w-100 carousel-img" alt="..." />
            <div className="carousel-caption absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h5 className="text-2xl font-bold">Restaurante gourmet</h5>
              <p>Tenemos variedad de platos gourmet que se ajustaran a tus gustos</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://1033609670.rsc.cdn77.org/c5b7-Pub-and-bar-Mila-Gastro-Fusion-interior.jpg" className="d-block w-100 carousel-img" alt="..." />
            <div className="carousel-caption absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h5 className="text-2xl font-bold">Reservas</h5>
              <p>Podras alquilar el local o mesa segun sea la ocasion que deseas</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    {/* SOBRE NOSOTROS */}
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4 style={{letterSpacing: 5, color: 'rgb(0, 0, 0)'}}><b>Sobre Nosotros</b></h4>
          <h1 className="display-4"><b>Sirviendo desde 2018</b></h1>
        </div>
        <div className="row">
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">Nuestra Mision</h1>
            <p>En Luz Mila gastro fusión, nuestra misión es ofrecer una experiencia gastronómica única que combina la tradición culinaria con la innovación moderna. Nos comprometemos a utilizar ingredientes frescos y locales, preparados con pasión y creatividad, para deleitar a nuestros clientes con platos que celebran la riqueza de la cocina regional e internacional. Buscamos crear un ambiente acogedor y sofisticado donde cada visita sea memorable y cada plato cuente una historia.</p>
          </div>
          <div className="col-lg-4 py-5 py-lg-0" style={{minHeight: 500}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100" src style={{objectFit: 'cover'}} alt=""/>
            </div>
          </div>
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">Nuestra Vision</h1>
            <p>Ser reconocidos como el gastrobar de referencia en nuestra comunidad, famoso por nuestra cocina excepcional, nuestro servicio al cliente impecable y nuestro compromiso con la sostenibilidad. Aspiramos a expandir nuestra marca y abrir nuevas ubicaciones, manteniendo siempre nuestros valores de calidad y excelencia. Queremos ser un lugar donde las personas se reúnan para celebrar momentos especiales y disfrutar de una experiencia culinaria inigualable.</p>
            <h5 className="mb-3"><i className="fa fa-check text-primary mr-3" />Los mejores servicios</h5>
            <h5 className="mb-3"><i className="fa fa-check text-primary mr-3" />La mejor calidad en nuestras comidas</h5>
          </div>
        </div>
      </div>
    </div>
    {/*SERVICIOS*/}
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title mb-5">
          <h4 className="text-black" style={{letterSpacing: 5}}>Nuestros Servicios</h4>
          <h1 className="display-4">Comida Fresca &amp; Natural</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src="https://www.gourmet4life.com/image0428/70/70a3374ddd938d72a290968b7c4321bc.jpg" alt="Organización de Eventos" />
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-calendar service-icon" /> Organización de Eventos</h4>
                <p className="m-0">En Mila, ofrecemos un servicio de organización de eventos para hacer de tu ocasión especial un momento inolvidable. Nos encargamos de todos los detalles para que tú puedas disfrutar.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-book service-icon" /> Reservas</h4>
                <p className="m-0">Facilitamos el proceso de reservas para que siempre tengas un lugar en nuestro restaurante. Ya sea para una cena con tu pareja o una reunión familiar, puedes reservar con antelación.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src="https://media.istockphoto.com/id/1324465031/es/foto/vista-de-alto-%C3%A1ngulo-close-up-mujer-asi%C3%A1tica-usando-servicio-de-entrega-de-comidas-ordenando.jpg?s=612x612&w=0&k=20&c=9rMPE2IoJIE3virjkcK-2D60-0KgQiJsfNEjeBvcn5s=" alt="Pedidos" />
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-bullhorn service-icon" /> Pedidos</h4>
                <p className="m-0">Realiza tus pedidos de manera rápida y sencilla a través de nuestro sistema en línea. Ofrecemos un servicio eficiente para que disfrutes de tus comidas favoritas sin complicaciones.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src="https://aishlatino.b-cdn.net/wp-content/uploads/2021/11/Como-sobrevivir-las-reuniones-familiares-910x512-SP.jpg" alt="Disfruta con la Familia" />
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-utensils service-icon" /> Disfruta con la Familia</h4>
                <p className="m-0">En Mila, queremos que disfrutes momentos especiales con tu familia. Nuestro ambiente acogedor y nuestro menú variado son perfectos para pasar tiempo de calidad juntos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* MAPA DE MILA */}
    <div className="container my-4">
      <center><h1 className="display-4">Donde Nos Encontramos</h1></center><br /><br />
      <div className="row">
        {/* Mapa incrustado */}
        <div className="col-md-8 mb-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7467456711715!2d-74.06769082538494!3d4.639206095335593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3a7f05c507%3A0xaec53f454f5a6c77!2zS3IgMTMgIzUyLTEwLCBCb2dvdMOh!5e0!3m2!1ses-419!2sco!4v1722490572590!5m2!1ses-419!2sco" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="hola"/>
        </div>
        {/* Tarjeta */}
        <div className="col-md-4">
          <div className="card mb-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVTW1fMUieArUf22D3HQV50OuBRt51kq9Pw&s" className="card-img-top" alt="imagen card" />
            <div className="card-body">
              <h5 className="card-title" style={{fontFamily: 'coursive'}}>UBICADOS EN CHAPINERO</h5>
              <p className="card-text">Bienvenido a MIla gastro fusion ven con nosotros y pasa un buen momento</p>
              <p className="card-text"><small className="text-body-secondary">RESERVAS: 3124875578</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="bg-white dark:bg-gray-900 imagenfondofooter overflow-hidden">
    <div className="container px-4 py-6 mx-auto mt-2">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {/* Primer div: Por qué nosotros */}
        <div className="text-center sm:text-left">
          <h3 className="text-yellow-400 font-semibold text-2xl mb-3 ml-4 shadow-md">Por qué nosotros</h3>
          <p className="text-white text-justify ml-4">Mila Gastro Fusión destaca por su fusión culinaria innovadora, usando ingredientes frescos y locales para ofrecer una experiencia gastronómica única en un ambiente elegante y divertido.</p>                    
        </div>
        {/* Segundo div: Nuestros Horarios */}
        <div className="text-center sm:text-left">
          <h3 className="text-yellow-400 font-semibold text-2xl mb-3">Nuestros Horarios</h3>
          <div className="space-y-1">
            <p className="text-white"><span className="text-white">Lunes:</span> 10:00 AM - 11:30 PM</p>
            <p className="text-white"><span className="text-white">Mar-Miér :</span> 10:00 AM - 11:30 PM</p>
            <p className="text-white"><span className="text-white">Jue-Vie :</span> 10:00 AM - 11:30 PM</p>
            <p className="text-white"><span className="text-white">Sábado:</span> 11:00 AM - 11:30 PM</p>
            <p className="text-white"><span className="text-white">Domingo:</span> CERRADO</p>
          </div>
        </div>
        {/* Tercer div: Información de contacto */}
        <div className="text-center sm:text-left">
          <h3 className="text-yellow-400 font-semibold text-2xl mb-3">Información de contacto</h3>
          <div className="space-y-1">
            <p className="text-white">Carrera 13 #52 - 10, Bogota, Colombia</p>
            <p className="text-white"><Link to="#">Escribenos: 3124875578</Link></p>
            <p className="text-white"><Link to="#">milagastrofusion@gmail.com</Link></p>
          </div>
        </div>
        {/* Cuarto div: Redes Sociales */}
        <div className="text-center sm:text-left">
          <h3 className="text-yellow-400 font-semibold text-2xl mb-3">Redes Sociales</h3>
          <p className="text-white mt-2">Da clic para conocer mas de nosotros</p>
          <div className="flex justify-center sm:justify-start space-x-2 mt-2 ml-28">
            <Link to="#" className="text-white">
              <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width={24} height={24} alt="fb" />             
            </Link>
            <Link to="#" className="text-white">
              <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width={24} height={24} alt="inst" />
            </Link>
          </div>
        </div>                
      </div>
      <hr className="my-4 border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <p className="mt-2 text-sm text-gray-100 dark:text-gray-300">Creado por :</p>
        <p className="mt-2 text-sm text-gray-100 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</div>

    )
}

export default Index;