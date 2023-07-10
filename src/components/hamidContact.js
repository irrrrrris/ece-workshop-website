import React from 'react';
import './HamidContact.css';
import hamid from './images/hamid.jpg';

const HamidContact = () => {
  return (
    <div className='hamid'>
      <div className='content'>
        <img className='pfp' src={hamid} alt='Hamid Timorabadi'></img>
        <div className='texts'>
          <h1>Hamid Timorabadi</h1>
          <h2>Associate Professor | Teaching Stream</h2>
          <h3>Energy Systems / Computer Engineering</h3>
          <br></br>
          <p className='contact'>Email: <a href='mailto:h.timorabadi@utoronto.ca'>h.timorabadi@utoronto.ca</a></p>
          <p className='contact'>Office: SF 1021A</p>
          <br></br>
          <h4>Bio</h4>
          <p className='bio'>
          Hamid Timorabadi received his BSc, MASc, and PhD degrees in Electrical Engineering from 
          the University of Toronto. He has worked as a project, design, and test engineer as well 
          as a consultant to industry. His research interests include the application of digital 
          signal processing in power systems.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HamidContact
