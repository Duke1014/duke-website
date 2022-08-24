import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/music'>
                Music
            </NavLink>
            <NavLink to='/devwork'>
                Code Projects
            </NavLink>
            <NavLink to='/gallery'>
                Gallery
            </NavLink>
            <NavLink to='/contact'>
                Contact
            </NavLink>
        </nav>
    )
}
