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
          <h1>2022 Summer Software Workshop</h1>
          <p>In this workshop, we reviewed APS105</p>
          <div className='container'>
            <img className='image1' src={Robotics_1} alt='image1'></img>
            <img className='image2' src={Robotics_2} alt='image2'></img>
            <img className='image3' src={Robotics_3} alt='image3'></img>
          </div>
          <br></br>
          <p id='Download'>Download Lecture Slides
            <a className='dl' href={PDF} download>PDF Format</a>
            <a className='dl' href={PPTX} download>MS PowerPoint Format</a>
          </p>
        </div>
    </div>
  )
}

export default Microbotics
