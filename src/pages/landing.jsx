import React from "react";
import landScape from "../img/logo_landScape.png";
import contactCard from "../img/contact_card.png";
import escaladaPhoto from "../img/escalada_priorat.jpg"
import piraguaPhoto from "../img/piragua.jpg";
import sky from "../img/snowboard.jpg";
import mainlogo from "../img/main_logo_trans.png";
import "../styles/pages.css";
export const Landing = () => {
  return (
    <main className="main-landing">
      <section className="description-box-1">
        <img className="logo1" src={mainlogo} />
      </section>

      <section className="description-box-3">
        <div className="image-container"></div>
        <p className="description-3">¡Bienvenidos a Camper Priorat!</p>
        <div className="description-body-2">
          <p className="description-4">
            Descubre la libertad de viajar con nuestra furgoneta camperizada.
            Explora la naturaleza sin renunciar a la comodidad de un hogar sobre
            ruedas.
          </p>
          <img className="logo2" src="https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        </div>
      </section>

      <section className="description-box-2">
        <p className="activity-title">Especialistas en adaptarnos a tus actividades favoritas</p>
        <div className="card-activity">
          <img className="escalada" alt="escalada" src={escaladaPhoto} />
          <img className="piragua" alt="piragua" src={piraguaPhoto} />
          <img className="sky" alt="sky" src={sky} />
        </div>
        <div className="indescription-2">
          <img className="contact-card" alt="contact-card" src={contactCard} />
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
