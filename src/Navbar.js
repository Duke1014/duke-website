import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <a><NavLink to='/'>Home</NavLink></a>
            <a><NavLink to='/music'>Music</NavLink></a>
            <a><NavLink to='/devwork'>Code Projects</NavLink></a>
            <a><NavLink to='/gallery'>Gallery</NavLink></a>
            <a><NavLink to='/contact'>Contact</NavLink></a>
        </nav>
    )
}
