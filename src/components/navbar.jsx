import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/components.css"
import logo from "../img/logo_three.png"


export const NavBar = () => {
    return(
        <nav className='navbar d-flex justify-content-start'>
            <img className='logo-img' alt='logo'src={logo}/>
            <ul className='item-list'>
                <Link to={'/market'} style={{ textDecoration: 'none' }}>
                    <li className='item-from-list'>Venta</li>
                </Link>
                <Link to={'/renting'} style={{ textDecoration: 'none' }}>
                    <li className='item-from-list'>Alquiler</li>
                </Link>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <li className='item-from-list'>Contacto</li>
                </Link>                
            </ul>
        </nav>
    );
}

export default NavBar;