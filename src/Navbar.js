import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/music'>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/devwork'>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/games'>Games</NavLink>
                </li>
                <li>
                    <NavLink to='/gallery'>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>   
        </nav>
    )
}
