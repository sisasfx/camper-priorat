import React from "react";
import "../styles/pages.css"
import CardContact from "../img/contact-card.png"
export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>¡Contacta con nosotros!</h2>
      <p>
        En Camper Priorat somos apasionados por el arte de la camperización y
        nos enorgullecemos de crear espacios únicos y acogedores utilizando como
        material principal la madera. Cada proyecto es elaborado con dedicación
        artesanal, cuidando todo detalle para brindar experiencias inigualables
        a nuestros clientes. Ofrecemos la posibilidad de búsqueda, compra y
        camperización a medida, también camperización de furgonetas de clientes
        que ya disponen de un vehículo. En la galería puedes encontrar nuestros
        proyectos. No dudes en ponerte en contacto con nosotros para cualquier
        información.
      </p>
        <img className="card-contact-img" src={CardContact}/>
    </div>
  );
};

export default Contact;
