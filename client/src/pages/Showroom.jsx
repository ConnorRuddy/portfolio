import React from 'react'
import './Css/Showroom.css'
import Projects from '../components/Projects/Projects'
import road from '../components/images/road.jpeg'

export const Showroom = () => {
  return (
    <div className='showroom-container' id ='showroom'>
      <div className='showroom-background'>
      
        <img src={road} alt='skyline' className="sky" />
        </div>
        <Projects/>
    </div>
  )
}
export default Showroom