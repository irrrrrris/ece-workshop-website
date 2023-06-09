import React from 'react'
import './Microbotics.css'
import Robotics_1 from './images/Robotics_1.jpg';
import Robotics_2 from './images/Robotics_2.jpg';
import Robotics_3 from './images/Robotics_3.jpg';
import PDF from './files/Microbotics.pdf';
import PPTX from './files/Microbotics.pptx';

const Microbotics = () => {
  return (
    <div className='microbotics'>
        <div className='content'>
          <h1>2023 Summer Robotics Workshop</h1>
          <p>This workshop is a fast-paced, technical project for students to design and implement their
             own microbot to follow black lines through an obstacle course. Students will be taught how to 
             CAD in Fusion 360 to design their own robot body, and how to wire and program an Arduino 
             microcontroller to control said robot. Teams of two will compete against each other to see 
             who can finish the course the fastest and with the best tracking. We look forward to your designs!
          </p>
          <div className='listContainer'>
              <ul className='list'>
                <li>Microcontrollers</li>
                <li>Motor Control</li>
                <li>Analog Signal</li>
                <li>Digital Signal</li>
                <li>PWM signal</li>
              </ul>
              <ul className='list'>
                <li>Arduino IDE</li>
                <li>CAD (Fusion 360)</li>
                <li>3D Printing</li>
                <li>Bluetooth Communication</li>
                <li>Communication Protocols (UART, SPI, I2C)</li>
              </ul>
          </div>
          <br></br>
          <div className='container'>
            <img className='image1' src={Robotics_1} alt='image1'></img>
            <img className='image2' src={Robotics_2} alt='image2'></img>
            <img className='image3' src={Robotics_3} alt='image3'></img>
          </div>
        </div>
    </div>
  )
}

export default Microbotics
