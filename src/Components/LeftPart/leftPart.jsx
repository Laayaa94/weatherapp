import React from 'react'
import './leftpart.css'
import leftImg from '../Assets/Windy day-rafiki.png'
const leftPart = () => {
  return (
    <div className='left'>
      <h1>Weather App</h1>
      <p>Discover the latest weather updates <br /> and forecasts in your city!</p>
      <img src={leftImg} alt="" />
    </div>
  )
}

export default leftPart
