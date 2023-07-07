import React from "react";
import "../styles/pages.css";
import Calendar from "../components/calendar";
import { Slider } from "../components/slider";
import Renting1 from "../Img/IMG-20230619-WA0012.jpg";
import Renting2 from "../Img/IMG-20230619-WA0013.jpg";
import Renting3 from "../Img/IMG-20230619-WA0014.jpg";
import Renting4 from "../Img/IMG-20230619-WA0015.jpg";
import Renting5 from "../Img/IMG-20230619-WA0016.jpg";
import Renting6 from "../Img/IMG-20230619-WA0017.jpg";


export const Renting = () => {
  const images = [Renting1, Renting2, Renting3, Renting4, Renting5, Renting6];
  return (
    <div className="main-renting">
      <div className="title">
        <h1>Welcome to Camper Priorat Renting</h1>
      </div>
      <section className="renting-section">
        <div className="slider-container">
          <Slider imagenes={images}/>
        </div>
        <div className="calendar-container">
          <Calendar />
        </div>
      </section>
    </div>
  );
};

export default Renting;
