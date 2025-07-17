import React from 'react'
import "./hero.scss"

const Hero = ({text}) => {
  return (
    <div className='hero'><h2>{text}</h2></div>
  )
}

export default Hero