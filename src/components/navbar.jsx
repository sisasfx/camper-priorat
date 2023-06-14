import React from 'react'
import "../styles/components.css"
import logo from "../img/logo_three.png"


export const NavBar = () => {
    return(
        <nav className='navbar d-flex justify-content-start'>
            <img className='logo-img' alt='logo'src={logo}/>
            <ul className='item-list'>
                <li className='item-from-list'>Venta</li>
                <li className='item-from-list'>Alquiler</li>
                <li className='item-from-list'>Contacto</li>
            </ul>
        </nav>
    );
}

export default NavBar;