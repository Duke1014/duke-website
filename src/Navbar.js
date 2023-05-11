import React from 'react'

export default function Navbar() {

    const handleScroll = (e) => {
        console.log(e)
        let scrollId = document.getElementById(e)
        scrollId.scrollIntoView({ behavior:'smooth' })
    }

    return (
        <nav>
            <span className='my-name'>
                Duke Norsworthy
            </span>
            <ul className='nav-items'>
                <li>
                    <span className='start-nav' onClick={() => handleScroll('start')}>
                        Start
                    </span>
                </li>
                <li>
                    <span className='dev-work-nav' onClick={() => handleScroll('projects')}>
                        Projects
                    </span>
                </li>
                <li>
                    <span className='about-nav' onClick={() => handleScroll('about')}>
                        About
                    </span>
                </li>
                <li>
                    <span className='contact-nav' onClick={() => handleScroll('contact')}>
                        Contact  
                    </span>
                </li>
            </ul>
        </nav>
    )
}
