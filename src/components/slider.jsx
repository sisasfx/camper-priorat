import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "../styles/components.css"
export const Slider = ({imagenes}) => {

    const [currentImg, setImg] = useState(0);
    const imageSize = imagenes?.length;

    const nextImage = () => {
        setImg(currentImg === imageSize -1 ? 0 : currentImg +1)
    }

    
    const prevImage = () => {
        setImg(currentImg === 0 ? imageSize -1 : currentImg -1)
    }
    return(
        <div className="slider-container">
            <button onClick={prevImage}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            {imagenes.map((item, key)=> {
                return( 
                <div>
                    {currentImg === key && (<img className="item-img" key={key} src={item} alt="imagen"/>)}                    
                </div> )               
            })}
            <button onClick={nextImage}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        </div>
    );
}
