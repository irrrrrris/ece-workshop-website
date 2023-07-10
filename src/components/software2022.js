import React from 'react'
import './Software2022.css'
import Software_1 from './images/Software_1.jpg';
import Software_2 from './images/Software_2.jpg';

const Software2022 = () => {
  return (
    <div className='software2022'>
        <div className='content'>
          <h1>2022 Summer Software Workshop</h1>
          <p>In this workshop, we reviewed APS105</p>
          <div className='container'>
            <img className='image1' src={Software_1} alt='image1'></img>
            <img className='image2' src={Software_2} alt='image2'></img>
          </div>
        </div>
    </div>
  )
}

export default Software2022
