import React from 'react'
import './PythonML.css'
import PythonML_1 from './images/PythonML_1.jpg';
import PythonML_2 from './images/PythonML_2.jpg';

const PythonML = () => {
  return (
    <div className='pythonML'>
        <div className='content'>
            <h1>2022 Summer Python ML Workshop</h1>
            <p>In this workshop, we reviewed APS105 and introduced some concepts from ECE244 and ECE297</p>
            <div className='container'>
              <img className='image1' src={PythonML_1} alt='image1'></img>
              <img className='image2' src={PythonML_2} alt='image2'></img>
            </div>
        </div>
    </div>
  )
}

export default PythonML
