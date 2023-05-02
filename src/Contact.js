import React from 'react'

import linkedin from './img/linkedin.png'
import github from './img/github.png'
import gmail from './img/gmail.png'

export default function Contact() {
  return (
    <div>
        <p>oh wow here is my contact info</p>
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
