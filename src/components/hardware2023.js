import React from 'react'
import './Hardware2023.css'
import Hardware_1 from './images/Hardware_1.jpg';
import Hardware_2 from './images/Hardware_2.jpg';

const Hardware2023 = () => {
  return (
    <div className='hardware2023'>
        <div className='content'>
          <h1>2022 Summer Software Workshop</h1>
          <p>In this workshop, we reviewed APS105</p>
          <div className='container'>
            <img className='image1' src={Hardware_1} alt='image1'></img>
            <img className='image2' src={Hardware_2} alt='image2'></img>
          </div>
        </div>
    </div>
  )
}

export default Hardware2023
