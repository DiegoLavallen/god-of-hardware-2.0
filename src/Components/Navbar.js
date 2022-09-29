import React from 'react';
import logo from '../Assets/logoKratos.png'
import './NavBar.css';
import CartWidget from './CartWidget'

export default function NavBar(){
    return (
        <div className="NavContainer">

            <img src={logo} alt="LogoKratos"/>

            <nav>
                <ul className="nav_links">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PRODUCTOS</a></li>
                    <li><a href="#">PCs ARMADAS</a></li>
                    <li><a href="#">NOTEBOOKS</a></li>
                </ul>
            </nav>
            <a href="#"><button>CONTACTO</button></a>

            <CartWidget/>

        </div>
    )
}