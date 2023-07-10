import React from 'react'
import './Hardware2022.css'
import Hardware_1 from './images/Hardware_1.jpg';
import Hardware_2 from './images/Hardware_2.jpg';

const Hardware2022 = () => {
  return (
    <div className='hardware2022'>
        <div className='content'>
          <h1>2022 Summer Hardware Workshop</h1>
          <p>In this workshop, we reviewed ECE110 and introduced some concepts from ECE212.</p>
          <div className='listContainer'>
              <ul className='list'>
                <li>Resistor, Capacitor, Inductor</li>
                <li>Series & Parallel Circuits</li>
                <li>Breadboard</li>
                <li>Soldering</li>
                <li>Multimeter</li>
                <li>Function Generator</li>
                <li>Oscilloscope</li>
              </ul>
              <ul className='list'>
                <li>Semiconductor</li>
                <li>Diode and LED</li>
                <li>Coupled Inductors</li>
                <li>Transistor</li>
                <li>Joule Thief</li>
                <li>Operational Amplifier</li>
                <li>Amplifier Circuit</li>
              </ul>
          </div>
          <br></br>
          <div className='container'>
            <img className='image1' src={Hardware_1} alt='image1'></img>
            <img className='image2' src={Hardware_2} alt='image2'></img>
          </div>
        </div>
    </div>
  )
}

export default Hardware2022
