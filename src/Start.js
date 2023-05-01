import React from 'react'
import arrow from './img/arrow.png'

export default function Start() {
    return (
        <div className='start'>
            <div className='slide-in start-one'>
                <h3>
                    Hello, my name is Duke.
                </h3>
            </div>
            <div className='slide-in start-two'>
                <h3>
                    I am a software engineer, musician, and game developer.
                </h3>
            </div>
            {/* <div className='arrow'>
              <img src={arrow} alt='arrow' />
            </div> */}
        </div>
    )
}
