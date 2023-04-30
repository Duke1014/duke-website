import React from 'react'
import arrow from './img/arrow.png'

export default function Start() {
  return (
    <div className='start'>
        <div className='slide-in start-one'>Hello, my name is Duke.</div>
        <div className='slide-in start-two'>I am a software engineer, musician, and game developer.</div>
        <div className='arrow'>
          <img src={arrow} alt='arrow' />
        </div>
    </div>
  )
}
