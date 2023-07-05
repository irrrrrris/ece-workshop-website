import React from 'react'
import './PastWorkshops.css'
import hardware from './images/hardware2.png'
import robotics from './images/robotics2.png'
import software from './images/software.png'
import hardwarerev from './images/hardware2-reversed.png'
import roboticsrev from './images/robotics2-reversed.png'
import softwarerev from './images/software_reversed.png'

const PastWorkshops = () => {
  return (
    <div className='past'>
      <h1>Past Workshops</h1>
        <div className='container'>
          <div className='box'>
            <img src={software} alt='software_icon' />
            <div className='info'>
              <h1>Software Workshop</h1>
              <p>We covered APS105, APS244, and ECE297. </p>
              <a href="#" className='pushbutton'>Learn More</a>
            </div>
          </div>
          <div className='box'>
            <img src={hardware} alt='hardware_icon' />
            <div className='info'>
              <h1>Hardware Workshop</h1>
              <p>We covered APS105, APS244, and ECE297. </p>
              <a href="#" className='pushbutton'>Learn More</a>
            </div>
          </div>
          <div className='box'>
            <img src={robotics} alt='robotics_icon' />
            <div className='info'>
              <h1>Robotics Workshop</h1>
              <p>We covered APS105, APS244, and ECE297. </p>
              <a href="#" className='pushbutton'>Learn More</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PastWorkshops