import React from 'react'
import stats1 from './images/stats2023.png'
import './PastWorkshops.css'

const PastWorkshops = () => {
  return (
    <div className='past'>
        <div className='container'>
          <img src={stats1} alt='stats1' />
          <div className='col-2'>
            <h2>Past Workshops</h2>
            <span className='line'></span>
            <p>In the past workshops, most of the participants felt that the quolity of the workshops were good</p>
            <p></p>
            <button className='button'>See All Past Workshops</button>
          </div>
        </div>
    </div>
  )
}

export default PastWorkshops