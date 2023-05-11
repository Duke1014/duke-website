import React, { useState } from 'react'
import StartImages from './StartImages'

import gremlin from './img/a gremlin.jpg'

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
        <div className='start' id='start'>
            <div className='slide-in start-one'>
                <p>
                    Hello, my name is Duke.
                </p>
            </div>
            <div className='slide-in start-two'>
                <p>
                    I am a<br/>
                    <span className='start-software-engineer' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('se') }><i class="fa-solid fa-code"></i> software engineer</span><br/>
                    <span className='start-game-developer' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('gd')}><i class="fa-solid fa-gamepad"></i> game developer</span><br/>
                    <span className='start-musician' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('mm')}><i class="fa-solid fa-music"></i> musician</span><br/>
                </p>
            </div>
            <StartImages hoveredText={hoveredText} />
            <div className='about-start phase-in'>
                <div className='about-info'>
                    <p>My passion is to bring incredible experiences and unique improvements to people's lives.</p>
                </div>
            </div>
            <div className='my-image-container'>
                <img src={gremlin} alt='Duke' className='my-image' />
            </div>
        </div>
    )
}
