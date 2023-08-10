import React from 'react'

export default function About() {

    const handleClick = e => {
        e.preventDefault()
        window.open(
            'https://www.linkedin.com/in/duke-norsworthy/overlay/1635535884207/single-media-viewer/?profileId=ACoAACiKUQcBX6nvNa785ZxtAczilNs1gbkY5v4',
            '_blank', 
            'noopener,noreferrer'
        )
    }
    return (
        <div className='about' id='about'>
            <div className='about-banner'>
                About
            </div>
            <section>
                <div className='about-paragraphs'>
                    <p>I tried my hand at game development with friends working on an emulated server of EverQuest. Since then, I found myself learning more languages and programming principles, leading me to take on Flatiron School. From there, I learned that developing can be more expansive than creating a game, but even creating the web tools to create and maintain apps is essential, and rewarding to build.</p>    
                </div>            
            </section>
            <button className='resume' onClick={handleClick}>Resume</button>
        </div>
    )
}
