import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a><NavLink to='/'>Home</NavLink></a>
                </li>
                <li>
                    <a><NavLink to='/music'>Music</NavLink></a>
                </li>
                <li>
                    <a><NavLink to='/devwork'>Code Projects</NavLink></a>
                </li>
                <li>
                    <a><NavLink to='/gallery'>Gallery</NavLink></a>
                </li>
                <li>
                    <a><NavLink to='/contact'>Contact</NavLink></a>
                </li>
            </ul>   
        </nav>
    )
}
