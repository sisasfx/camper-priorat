import React from "react";
import landScape from "../img/logo_landScape.png";
import contactCard from "../img/contact_card.png";
import "../styles/pages.css";
export const Landing = () => {
  return (
    <main className="main-landing">
      <section className="description-box-1">
        {/*<p className="description">
          ¡Bienvenidos a Camper Priorat! Nos complace presentarles nuestra nueva
          empresa especializada en camperización, venta y alquiler de furgonetas
          camperizadas. En Camper Priorat hemos creado un concepto único que
          combina la libertad de explorar la naturaleza con el confort de un
          hogar sobre ruedas. Estamos ubicados en el impresionante entorno del
          Priorat, una zona famosa por sus deportes de montaña y su belleza
          natural. En Camper Priorat entendemos que la aventura y la comodidad
          no tienen por qué ser mutuamente excluyentes. Nuestro objetivo es
          brindarle la oportunidad de disfrutar de una experiencia de viaje
          inolvidable, sin renunciar a las comodidades de un alojamiento
          acogedor. Nuestras furgonetas están meticulosamente diseñadas y
          equipadas para satisfacer todas sus necesidades durante su tiempo en
          la carretera. ¿Qué nos hace diferentes? En primer lugar, nuestra
          ubicación en el Priorat nos brinda un entorno privilegiado para la
          práctica de deportes de montaña. Ya sea que desee escalar las
          majestuosas montañas, hacer senderismo por los bosques frondosos o
          disfrutar de una emocionante jornada de ciclismo de montaña, tenemos
          todo lo que necesita para su aventura al aire libre. En segundo lugar,
          nuestras furgonetas camperizadas son verdaderos hogares sobre ruedas.
          Cada una de ellas ha sido cuidadosamente transformada para
          proporcionarle una experiencia de viaje cómoda y conveniente. Contamos
          con áreas de descanso acogedoras, cocinas completamente equipadas,
          baños funcionales y sistemas de calefacción para garantizar su
          comodidad en cualquier estación del año. Además, en Camper Priorat,
          nos enorgullece ofrecer un servicio excepcional al cliente. Nuestro
          equipo está formado por expertos en el campo de la camperización y los
          deportes de montaña, y estarán encantados de ayudarle en cada etapa de
          su viaje. Desde la selección de la furgoneta adecuada hasta la
          recomendación de las rutas más emocionantes, estamos aquí para que su
          experiencia sea única y memorable. Ya sea que esté buscando unas
          vacaciones en familia, una escapada romántica o una aventura
          emocionante con amigos, Camper Priorat es su elección perfecta.
          Permítanos llevarlo a explorar las montañas impresionantes y los
          paisajes vírgenes del Priorat mientras disfruta de la comodidad y la
          libertad que solo una furgoneta camperizada puede ofrecer. Estamos
          entusiasmados de darle la bienvenida a bordo y de compartir con usted
          nuestra pasión por la naturaleza y los deportes de montaña.
          ¡Contáctenos hoy mismo y comencemos a planificar su próxima aventura!
          ¡Aventúrese, explore y viva la experiencia con Camper Priorat!
        </p>*/}
        <p className="description">
          ¡Bienvenidos a Camper Priorat! Descubre la libertad de viajar con
          nuestra furgoneta camperizada. Explora la naturaleza sin renunciar a
          la comodidad de un hogar sobre ruedas.
        </p>
        <img className="landScape" alt="logo-landScape" src={landScape} />
      </section>
      <section className="description-box-2">
        <div className="indescription-2">
          <img className="woodLogo" alt="woodlogo" src={contactCard}/>
          <p className="description">
            ¿Qué nos hace diferentes? La combinación perfecta de aventura y
            confort.
          </p>
        </div>
        <p className="diamont-title">Tenemos lo que necesitas para:</p>
        <div className="diamonts">
          <div className="hexagon">Para senderismo o ciclismo</div>
          <div className="hexagon">Escalada</div>
          <div className="hexagon">Disfrutar de entorno privilegiado</div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
