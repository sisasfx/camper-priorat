import React from "react";
import logo from "../img/main-logo-trans.png";
import "../styles/pages.css";

export const Landing = () => {
  return (
    <main className="main-landing">
      <section className="description-box-1">
        <div className="logo1"></div>
      </section>

      <section className="description-box-3">

        <p className="description-3">Adentrate en el emocionante mundo de la camperización, donde los limites
          desaparecen y la libertad se convierte en tu mejor compañera de viaje.
          Aquí encontrarás todo lo que necesitas para transformar tu furgoneta</p>

      </section>

      <section className="description-box-2">
        <div className="title-sec">
          <h1 className="titulo-2">CAMPERIZA TU FURGONETA</h1>
          <h3 className="parag-2">Nuestra empresa de camperización de furgonetas se enorgullece en ofrecer
            una amplia gama de servicios para ayudarte a transformar tu furgoneta en un hogar
            sobre ruedas personaliozado y funcional.
          </h3>
        </div>

        <div class="card-container">
          <div class="card-row">
            <div class="card-logo">
              <img class="logo-van" src={logo} />
              <h3>Diseño personalizado</h3>
              <p>Trabajamos estrechamente contigo para aprender tus requisitos y preferencias.
                Haremos un plan personalizado que optimice el
                 espacio de tu furgoneta maximizando la comodidad y la funcionalidad
              </p>
            </div>
            <div class="card-logo">
              <img class="logo-van" src={logo} />
              <h3>Instalación de interiores</h3>
              <p>Ya sea que deseas una cama cómoda, una cocina compacta, un sistema 
                de almacenamiento inteligente o una zona de trabajo,
                 nos encargamos de hacer realidad tu visión.
              </p>
            </div>
            <div class="card-logo">
              <img class="logo-van" src={logo} />
              <h3>Sistema eléctrico y energía solar</h3>
              <p>Ofrecemos servicios de instalación de sistemas eléctricos y 
                energía para proporcionarte una fuente confiable de energía
                mientras estás en la carretera
              </p>
            </div>
          </div>
          <div class="card-row">
            <div class="card-logo">
              <img class="logo-van" src={logo} />
              <h3>Fonanería y sistemas de agua</h3>
              <p>Instalación de tanques de agua, bombas de agua, grifos, fregaderos y
                 duchas, garantizando que tengas acceso a agua limpia 
                 y funcional durante tus viajes.</p>
            </div>
            <div class="card-logo">
              <img class="logo-van" src={logo} />
              <h3>Aislamiento y climatización</h3>
              <p>Realizamos el aislamiento adecuado para mantener la temperatura
                 deseada y ofrecemos opciones de climatización como ventiladores, 
                acondicionadores de aire y calefacción.
              </p>
            </div>
            <div class="card-logo">
              <img class="logo-van" src={logo} />
              <h3>Mobiliario y accesorios</h3>
              <p>Desde almacenamiento y mesas plegables hasta sistemas de almacenamiento modulares,
                 te ayudamos a elegir los elementos adecuados para optimizar el tamaño de tu furgoneta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
