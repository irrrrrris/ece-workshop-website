import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo-nobg.png'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src={logo} alt='logo' />
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color: '#ffffff'}} />)
                : (<FaBars size={30} style={{color: '#ffffff'}} />)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/software-page'>Software Workshops</a>
                </li>
                <li className='nav-item'>
                    <a href='/hardware-page'>Hardware Workshops</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Register</a>
                </li>
                <li className='nav-item'>
                    <a href='/hamid-contact-page'>Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar