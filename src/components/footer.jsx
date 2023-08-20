import React from "react";
import foot from "../img/footer.png"
import "../styles/components.css"

export const Footer = () => {
    return (
        <footer className="foot d-flex">
            <img className="footer-page" alt="footer" src={foot}/>
        </footer>
    );
}

export default Footer;