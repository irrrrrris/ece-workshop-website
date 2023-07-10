import React from 'react';
import './Software2023.css';
import PDF from './files/SoftwareWorkshop.pdf';
import PPTX from './files/SoftwareWorkshop.pptx';

const Software2023 = () => {
  return (
    <div className='software2023'>
        <div className='content'>
            <h1>2023 Summer Software Workshop</h1>
            <p>In this workshop, we reviewed APS105 and introduced some concepts from ECE244 and ECE297. 
              We covered the following topics. Students first took a brief lecture and then worked on practice questions on an online IDE platform called "Codeboard"
              Students also competed to make the best Sudoku algorithm as a final competition.
            </p>
            <div className='labelContainer'>
              <h4>C</h4>
              <h4></h4>
              <h4>C++</h4>
            </div>
            <div className='listContainer'>
              <ul className='list'>
                <li>Loop</li>
                <li>Array</li>
                <li>String</li>
                <li>Pointer</li>
                <li>Function</li>
                <li>Random Number</li>
                <li>Recursion</li>
              </ul>
              <ul className='list'>
                <li>Header Files</li>
                <li>Dynamic Memory</li>
                <li>Struct</li>
                <li>Linked List</li>
                <li>Sort Algorithm</li>
                <li>Binary Search Tree</li>
                <li>Hash Table</li>
              </ul>
              <ul className='list'>
                <li>IO Stream</li>
                <li>String Stream</li>
                <li>Object Oriented</li>
                <li>Class</li>
                <li>Encapsulation</li>
                <li>Constructor</li>
                <li>Destructor</li>
              </ul>
              <ul className='list'>
                <li>Copy Constructor</li>
                <li>Operator Overloading</li>
                <li>Standard Template Library</li>
                <li>Templates</li>
                <li>Inheritance</li>
              </ul>
            </div>
            <br></br>
            <p id='Download'>Download Lecture Slides
            <a className='dl' href={PDF} download>PDF Format</a>
            <a className='dl' href={PPTX} download>MS PowerPoint Format</a>
            </p>
            <p id='Hyperlink'>
              <a className='link' href='https://replit.com/@ShuntaroWakamat/Sudoku'>Sudoku Project Instructor's Solution</a>
            </p>
        </div>
    </div>
  )
}

export default Software2023
