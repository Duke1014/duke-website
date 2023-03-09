import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li className='nav-name'>
                    Duke Norsworthy
                </li>
                <li className='nav-home'>
                    {/* <NavLink to='/'> */}
                        Home
                    {/* </NavLink> */}
                </li>
                <li className='nav-music'>
                    {/* <NavLink to='/music'> */}
                        Music
                    {/* </NavLink> */}
                </li>
                <li className='nav-projects'>
                    {/* <NavLink to='/devwork'> */}
                        Projects
                    {/* </NavLink> */}
                </li>
                <li className='nav-games'>
                    {/* <NavLink to='/games'> */}
                        Games
                    {/* </NavLink> */}
                </li>
                <li className='nav-gallery'>
                    {/* <NavLink to='/gallery'> */}
                        Gallery
                    {/* </NavLink> */}
                </li>
                <li className='nav-contact'>
                    {/* <NavLink to='/contact'> */}
                        Contact
                    {/* </NavLink> */}
                </li>
            </ul>   
        </nav>
    )
}
