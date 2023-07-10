import React from 'react'
import './Hardware2023.css'
import Hardware_3 from './images/Hardware_3.jpg';
import Hardware_4 from './images/Hardware_4.jpg';
import PDF from './files/HardwareWorkshop.pdf';
import PPTX from './files/HardwareWorkshop.pptx';

const Hardware2023 = () => {
  return (
    <div className='hardware2023'>
        <div className='content'>
          <h1>2023 Summer Hardware Workshop</h1>
          <p>In this workshop, we reviewed ECE212, ECE221, and ECE231.
            The following is a list of hands-on activities that students carried out in this workshop. 
          </p>
          <div className='listContainer'>
              <ul className='list'>
                <li>Breadboard Connections</li>
                <li>Soldering</li>
                <li>Voltage Divider</li>
                <li>Diode Testing</li>
                <li>Half/Full-Wave Rectifier</li>
                <li>Astable Multivibrator</li>
                
              </ul>
              <ul className='list'>
                <li>Building Amplifiers</li>
                <li>Colour Detector</li>
                <li>Pulse Width Modulation and Motors</li>
                <li>Making Coupled Inductors</li>
                <li>Joule Thief</li>
                <li>Flashlight Competition</li>
              </ul>
          </div>
          <br></br>
          <div className='container'>
            <img className='image1' src={Hardware_3} alt='image1'></img>
            <img className='image2' src={Hardware_4} alt='image2'></img>
          </div>
        </div>
    </div>
  )
}

export default Hardware2023
