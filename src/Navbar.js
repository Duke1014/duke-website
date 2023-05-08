import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <span className='my-name'>
                Duke Norsworthy
            </span>
            <ul className='nav-items'>
                <li>
                    <span className='start-nav'>
                        Start
                    </span>
                </li>
                <li>
                    <span className='dev-work-nav'>
                        Projects
                    </span>
                </li>
                {/* <li>
                    <span className='music-nav'>
                        Music
                    </span>
                </li> */}
                <li>
                    <span className='about-nav'>
                        About
                    </span>
                </li>
                <li>
                    <span className='contact-nav'>
                        Contact  
                    </span>
                </li>
            </ul>
        </nav>
    )
}
