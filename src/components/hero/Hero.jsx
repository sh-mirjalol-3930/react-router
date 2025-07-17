import React from 'react'
import "./Hero.scss"

const Hero = ({text}) => {
  return (
    <div className='hero'><h2>{text}</h2></div>
  )
}

export default Hero