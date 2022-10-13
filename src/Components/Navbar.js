import React from 'react';
import logo from '../Assets/logoKratos.png'
import './NavBar.css';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';




export default function Navbar(){
  return (
    <div className='NavContainer'>
      <Link to="/">
      <img src={logo} alt="" />
      </Link>
      
      <nav>
        <ul className='nav_links'>
          
          <li><NavLink to="/category/Inicio">INICIO</NavLink></li>
          <li><NavLink to="/category/productos">PRODUCTOS</NavLink></li>
          <li><NavLink to="/category/pcsArmadas">PCs ARMADAS</NavLink></li>
          <li><NavLink to="/category/notebooks">NOTEBOOKS</NavLink></li>
          
        </ul>
      </nav>
      
      <a className='cta' href="#"><button>CONTACTO</button></a>

      <CartWidget />
     
    
    </div>
  
  );


}