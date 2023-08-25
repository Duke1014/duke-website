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
                <li className='start-nav' onClick={() => handleScroll('start')}>
                    <span>
                        Start
                    </span>
                </li>
                <li className='dev-work-nav' onClick={() => handleScroll('projects')}>
                    <span>
                        Projects
                    </span>
                </li>
                <li className='about-nav' onClick={() => handleScroll('about')}>
                    <span>
                        About
                    </span>
                </li>
                <li className='contact-nav' onClick={() => handleScroll('contact')}>
                    <span>
                        Contact  
                    </span>
                </li>
            </ul>
        </nav>
    )
}
