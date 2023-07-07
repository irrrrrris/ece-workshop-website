import React from 'react'
import './Hero.css'
import hardware from './images/hardware2.png'
import robotics from './images/robotics2.png'
import software from './images/software.png'
import Hardware from './Hardware'
import Software from './Software'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <p>2023 ECE</p>
            <p>Summer Workshops</p>
            <p>free ECE workshops for 1st years & 2nd years</p>
            <button href='/' className='button'>Register NOW!</button>
            <div className='past'>
                <div className='container'>
                    <div className='box'>
                        <img src={software} alt='software_icon' />
                        <div className='info'>
                            <h1>Software Workshop</h1>
                            <p>We covered APS105, APS244, and ECE297. </p>
                            <a href="/software-page" className='pushbutton'>Learn More</a>
                        </div>
                    </div>
                    <div className='box'>
                        <img src={hardware} alt='hardware_icon' />
                        <div className='info'>
                            <h1>Hardware Workshop</h1>
                            <p>We covered ECE110, ECE221, and ECE231. </p>
                            <a href="/hardware-page" className='pushbutton'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero