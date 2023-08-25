import React, { useState } from 'react'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    const handleScroll = (e) => {
        let scrollId = document.getElementById(e)
        scrollId.scrollIntoView({ behavior:'smooth' })
    }
      
    return (
        <nav>
            <span className='my-name'>
                Duke Norsworthy
            </span>
            <div className="menu-button" onClick={() => setMenu(!menu)}>
                <div className="menu-stuff-one"></div>
                <div className="menu-stuff-two"></div>
                <div className="menu-stuff-three"></div>
            </div>
            <ul className={menu ? 'nav-items' : 'hidden-nav'}>
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
