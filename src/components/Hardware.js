import React from 'react'
import './Hardware.css'

const Hardware = () => {
  return (
    <div className='hardware'>
        <div className='content'>
        <h1>ECE Summer Hardware Workshops</h1>
          <p className='description'>In our hardware workshops, we provide a quick review of the hardware course, ECE110 and a hands-on experience 
            of the advanced hardware knowledge that students learn in their 2nd year courses such as <a href='https://engineering.calendar.utoronto.ca/course/ece212h1' className='highlight'>ECE212(Circuit Analysis)</a>
             and <a href='https://engineering.calendar.utoronto.ca/course/ece231h1' className='highlight'>ECE231(Introductory Electronics).</a> Students will have a quick lecture on new topics followed by lab exercises
             in a team, which enhance not only the understanding of the topics but also the communication skills, research skills, and debugging skills.
          </p>
          <h2>2023 Summer</h2>
            <a className='link' href='/hardware-2023-page'>Hardware Workshop 1 (Nicholas Mutlak)</a>
            <a className='link' href='/microbotics-page'>Hardware Workshop 2 - Microbotics - (Ryan Seto)</a>
          <h2>2022 Summer</h2>
            <a className='link' href='/hardware-2022-page'>Hardware Workshop</a>
            <a className='link' href='/pcb-2022-page'>PCB Workshop</a>
        </div>
    </div>
  )
}

export default Hardware