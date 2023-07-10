import React from 'react'
import './PCB2022.css';
import PCB_1 from './images/PCB_1.jpg';
import PCB_2 from './images/PCB_2.jpg';

const PCB2022 = () => {
  return (
    <div className='pcb2022'>
        <div className='content'>
          <h1>2022 Summer Software Workshop</h1>
          <p>In this workshop, we reviewed APS105</p>
          <div className='container'>
            <img className='image1' src={PCB_1} alt='image1'></img>
            <img className='image2' src={PCB_2} alt='image2'></img>
          </div>
        </div>
    </div>
  )
}

export default PCB2022