import React
// , { useState } 
from 'react'

export default function Navbar() {

    // const [menu, setMenu] = useState(false)

    // const handleScroll = (e) => {
    //     let scrollId = document.getElementById(e)
    //     scrollId.scrollIntoView({ behavior:'smooth' })
    // }
      
    return (
        <nav>
            <span className='my-name'>
                Duke Norsworthy
            </span>
            {/* <div className="menu-button" onClick={() => setMenu(!menu)}>
                <div className="menu-stuff-one"></div>
                <div className="menu-stuff-two"></div>
                <div className="menu-stuff-three"></div>
            </div>
            <ul className={menu ? 'nav-items' : 'hidden-nav'}>
                <li onClick={() => handleScroll('start')}>
                    <span className='start-nav'>
                        Start
                    </span>
                </li>
                <li onClick={() => handleScroll('projects')}>
                    <span className='dev-work-nav'>
                        Projects
                    </span>
                </li>
                <li onClick={() => handleScroll('about')}>
                    <span className='about-nav'>
                        About
                    </span>
                </li>
                <li onClick={() => handleScroll('contact')}>
                    <span className='contact-nav'>
                        Contact  
                    </span>
                </li>
            </ul> */}
        </nav>
    )
}
