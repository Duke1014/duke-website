import React, { useState } from 'react'
import StartImages from './StartImages'

// import arrow from './img/arrow.png'


export default function Start() {

    const [hoveredText, setHoveredText] = useState(null)

    const handleHover = (type) => {
        setHoveredText(type)
        console.log(type)
    }
    const handleMouseOut = () => {
        setHoveredText(null)
        console.log('off')
    }

    return (
        <div className='start'>
            <div className='slide-in start-one'>
                <p>
                    Hello, my name is Duke.
                </p>
            </div>
            <div className='slide-in start-two'>
                <p>
                    I am a <span className='start-software-engineer' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('se') }>software engineer</span>
                    , <span className='start-game-developer' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('gd')}>game developer</span>
                    , and <span className='start-musician' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('mm')}>musician</span> based in New York City.
                </p>
            </div>
            {/* <div className='arrow'>
              <img src={arrow} alt='arrow' />
            </div> */}

            <StartImages hoveredText={hoveredText} />
        </div>
    )
}
