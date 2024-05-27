import React from 'react'
import './Hero.css'
import arrow_icon from '../../assets/dark-arrow.png'


function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education For World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience nedeed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero