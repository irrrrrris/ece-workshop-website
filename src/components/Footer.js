import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='icons'>
            <li className='footer-item'>
                <SocialIcon url='https://www.instagram.com/ece_workshop_uoft/'></SocialIcon>
            </li>
            <li className='footer-item'>
                <SocialIcon url='https://discord.gg/RgGkuRbxhQ'></SocialIcon>
            </li>
            <li className='footer-item'>
                <SocialIcon url="mailto:ecesummerworkshop@gmail.com" network='mailto'></SocialIcon>
            </li>
        </ul>
        <div className='container'>
            <h4>Email: <a href='mailto:ecesummerworkshop@gmail.com'>ecesummerworkshop@gmail.com</a></h4>
            <h4>Supervisor: Professor Hamid Timorabadi</h4>
        </div>
    </div>
  )
}

export default Footer