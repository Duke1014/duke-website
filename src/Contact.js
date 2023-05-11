import React from 'react'

import linkedin from './img/linkedin.png'
import github from './img/github.png'
import gmail from './img/gmail.png'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='contact-banner'>
                Contact
            </div>
            <div>
                Here's a bunch of buttons and stuff. all the buttons will take you to their respective pages, but will keep you here on this page.
            </div>
            <a href='https://www.linkedin.com/in/duke-norsworthy/'>
                <img src={linkedin} alt='linkedin' />
            </a>
            <a href='https://github.com/Duke1014'>
                <img src={github} alt='github' />
            </a>
            <a href='mailto:duke.norsworthy@gmail.com'>
                <img src={gmail} alt='gmail' />
            </a>
        </div>
    )
}
