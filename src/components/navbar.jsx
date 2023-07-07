import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/components.css";
import logo from "../Img/logo_three.png";
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="navs-container">
      <nav className="navbar-desktop">
        <img className="logo-img" alt="logo" src={logo} />
        <ul className="item-list">
          <Link to={"/market"} style={{ textDecoration: "none" }}>
            <li className="item-from-list">Venta</li>
          </Link>
          <Link to={"/renting"} style={{ textDecoration: "none" }}>
            <li className="item-from-list">Alquiler</li>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li className="item-from-list">Contacto</li>
          </Link>
        </ul>
      </nav>
      <nav className="navbar-phone">
        <img className="logo-img" alt="logo" src={logo} />
        <span className="burger-button">
          <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!isOpen)} />
        </span>
        <ul className={`item-list-phone ${isOpen ? "open": "notOpen"}`}>
          <Link to={"/market"} style={{ textDecoration: "none" }}>
            <li className="item-from-list-phone">Venta</li>
          </Link>
          <Link to={"/renting"} style={{ textDecoration: "none" }}>
            <li className="item-from-list-phone">Alquiler</li>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li className="item-from-list-phone">Contacto</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
