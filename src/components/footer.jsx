import React from "react";
import footer from "../img/footer.png"
import "../styles/components.css"

export const Footer = () => {
    return (
        <footer className="foot d-flex">
            <img className="footer-page" alt="footer" src={footer}/>
        </footer>
    );
}

export default Footer;