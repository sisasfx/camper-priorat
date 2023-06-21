import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Renting1 from "../img/IMG-20230619-WA0012.jpg";
import Renting2 from "../img/IMG-20230619-WA0013.jpg";
import Renting3 from "../img/IMG-20230619-WA0014.jpg";
import Renting4 from "../img/IMG-20230619-WA0015.jpg";
import Renting5 from "../img/IMG-20230619-WA0016.jpg";
import Renting6 from "../img/IMG-20230619-WA0017.jpg";

export const Slider = () => {
  const images = [Renting1, Renting2, Renting3, Renting4, Renting5, Renting6];
  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[3]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[4]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[5]})` }}>
        </div>
      </div>
    </Slide>
  );
};

export default Slider;
