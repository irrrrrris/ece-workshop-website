import React from 'react'
import './Hero.css'
import hardware from './images/hardware.png'
import software from './images/software.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <p>ECE</p>
            <p>Summer Workshops</p>
            <p>free ECE workshops for 1st years & 2nd years</p>
            <div className='past'>
                <div className='container'>
                    <div className='box'>
                        <img src={software} alt='software_icon' />
                        <div className='info'>
                            <p>Covers material from APS105, ECE244, and ECE297. </p>
                            <a href="/software-page" className='pushbutton'>Learn More</a>
                        </div>
                    </div>
                    <div className='box'>
                        <img src={hardware} alt='hardware_icon' />
                        <div className='info'>
                            <p>Covers material from ECE110, ECE221, and ECE231. </p>
                            <a href="/hardware-page" className='pushbutton'>Learn More</a>
                        </div>
                    </div>
                    <button href='/aa' className='button'>Register NOW!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero