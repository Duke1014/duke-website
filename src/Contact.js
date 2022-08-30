import React from 'react'

import linkedIn from './img/linkedin.png'
import github from './img/github.png'
import gmail from './img/gmail.png'
// import twitter from './img/twitter.png'

export default function Contact() {
  return (
    <div className='contact'>
        <div><a href='https://www.linkedin.com/in/brett-duke-norsworthy/'><img src={linkedIn} alt='LinkedIn'/></a>LinkedIn</div> 
        <div><a href='https://github.com/Duke1014/'><img src={github} alt='GitHub'/></a>GitHub</div> 
        {/* <div><img src={twitter} alt='Twitter'/>Twitter</div>  */}
        <div><a href = "mailto: duke.norsworthy@gmail.com"><img src={gmail} alt="Email"/></a>Email</div>        
    </div>
  )
}
