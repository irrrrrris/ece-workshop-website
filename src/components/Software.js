import React from 'react'
import './Software.css'

const Software = () => {
  return (
    <div className='software'>
        <div className='content'>
          <h1>ECE Summer Software Workshops</h1>
          <p className='description'>
            In our software workshops, we provide a thorough review of the C language course, APS105 and 
            a brief introduction into the 2nd year programming courses such as <a href='https://engineering.calendar.utoronto.ca/course/ece244h1' className='highlight'>ECE244(Programming Fundamentals) </a> 
            and <a href='https://engineering.calendar.utoronto.ca/course/ece297h1' className='highlight'>ECE297(Software Design and Communication)</a>. 
            Students will have a lecture on C and C++ followed by a short practice questions. At the end of the workshop, they will work on a project
            to put what they learnt in practice.
          </p>
          <h2>2023 Summer</h2>
            <a className='link' href='/software-2023-page'>Software Workshop - C & C++ - (Iris, Simon, Shuntaro)</a>
          <h2>2022 Summer</h2>
            <a className='link' href='/software-2022-page'>Software Workshop</a>
            <a className='link' href='/python-ML-page'>Machine Learning & Python</a>
        </div>
    </div>
  )
}

export default Software
