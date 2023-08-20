import React from "react";
import "../styles/pages.css";
import { Slider } from "../components/slider";
import Van1 from "../img/_57A4101 copia1.jpg";
import Van2 from "../img/_57A4102 copia1.jpg";
import Van3 from "../img/_57A4106 copia1.jpg";
import Van4 from "../img/_57A4111 copia.jpg";
import Van5 from "../img/_MG_0257 copia.jpg";
import Van6 from "../img/_MG_0258 copia1.jpg";
import Van7 from "../img/_MG_0260 copia1.jpg";
export const Market = () => {
  const images = [Van1, Van2, Van3, Van4, Van5, Van6, Van7];
  return (
    <div className="main-market">
      <div className="title">
        <h1>Welcome to Camper Priorat Market</h1>
      </div>
      <div className="slider-section">
        <Slider imagenes={images} />
      </div>
      <div className="market-description">
        <h4>Características camperización:</h4>
        <ul>
          <li>Comedor con dos bancos de 135cm y mesa abatible que transforma el comedor en una cama de 182x135cm.</li>
          <li>Cocina completa con fregadero y dos fogones. Nevera CoolZone de 85L.</li>
          <li>Sistema de electricidad Victron 4 veces sobredomensionado: Sistema de 12V y 220V para posibilidad de conectarse en la red.</li>
          <li>Placa solar monocristalina de 170cm y 410w.</li>
          <li>SmartSolar MPPT 100/30.</li>
          <li>Batería de litio Eleksol de 150Ah.</li>
          <li>Orion-Tr Smart 12/12-30Ah (360w).</li>
          <li>Smart Battery Protect 12/24v-65A.</li>
          <li>Smart Shunt 500A/50mV.</li>
          <li>Luces Led táctiles y tomas usb en toda la vivienda.</li>
          <li>Calefacción Autoterm 2D con salida de aire en el comedor-dormitorio y en la ducha.</li>
          <li>Depósito de aguas limpias de 85L y dos depósitos de agua sucia de 80L. Distintivo de llenado de todos los depósitos.</li>
          <li>Ducha interior con agua fría y caliente y ducha externa también con agua fría y caliente.</li>
          <li>3 claraboyas con mosquitera y oscurecedor (Turbovent intracción-extracción de aire en comedor y 2 Dometic, una de ellas en la ducha interior).</li>
          <li>4Ventanas Dometic abatibles con mosquitera y oscurecedor.</li>
          <li>Poti-Poti Dometic 976.</li>
        </ul>
      </div>     
    </div>
  );
};

export default Market;
