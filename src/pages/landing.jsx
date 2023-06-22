import React from "react";
import landScape from "../img/logo_landScape.png";
import contactCard from "../img/contact_card.png";
import escaladaPhoto from "../img/escalada_priorat.jpg"
import piraguaPhoto from "../img/piragua.jpg";
import sky from "../img/snowboard.jpg";

import "../styles/pages.css";
export const Landing = () => {
  return (
    <main className="main-landing">
      <section className="description-box-1">
        <p className="description">
          ¡Bienvenidos a Camper Priorat! Descubre la libertad de viajar con
          nuestra furgoneta camperizada. Explora la naturaleza sin renunciar a
          la comodidad de un hogar sobre ruedas.
        </p>
        <img className="landScape-3" alt="logo-landScape" src={landScape} />
      </section>

      <section className="description-box-3">
        <p className="description-3">
        ¡Bienvenidos a Camper Priorat! Descubre la libertad de viajar con
          nuestra furgoneta camperizada. Explora la naturaleza sin renunciar a
          la comodidad de un hogar sobre ruedas.
        </p>
        
      </section>

      <section className="description-box-2">
      <p className="activity-title">Tenemos lo que necesitas para que puedas hacer</p>
       <div className="card-activity">
          <img className="escalada" alt="escalada" src={escaladaPhoto} />
          <img className="piragua" alt="piragua" src={piraguaPhoto}/>
          <img className="sky" alt="sky" src={sky}/>
       </div>
        <div className="indescription-2">
          <img className="contact-card" alt="contact-card" src={contactCard}/>
          <p className="description-2">
            ¿Qué nos hace diferentes? La combinación perfecta de aventura y
            confort.
          </p>
        </div>  
      </section>
    </main>
  );
};

export default Landing;
