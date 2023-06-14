import React from "react";
import landScape from "../img/logo_landScape.png"
import "../styles/pages.css"
export const Landing = () => {
    return(
        <div className="main-landing">
            <img className="landScape" alt="logo-landScape" src={landScape}/>
        </div>
    );
}

export default Landing;