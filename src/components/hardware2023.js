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
          <p>In this workshop, we reviewed ECE212, ECE221, and ECE231 </p>
          <div className='container'>
            <img className='image1' src={Hardware_3} alt='image1'></img>
            <img className='image2' src={Hardware_4} alt='image2'></img>
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

export default Hardware2023
