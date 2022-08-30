import React from 'react'

import linkedIn from './img/linkedin.png'
import github from './img/github.png'
import gmail from './img/gmail.png'
// import twitter from './img/twitter.png'

export default function Contact() {
  return (
    <div className='contact'>
        <div><img src={linkedIn} alt='LinkedIn'/>LinkedIn</div> https://www.linkedin.com/in/brett-duke-norsworthy/
        <div><img src={github} alt='GitHub'/>GitHub</div> https://github.com/Duke1014/
        {/* <div><img src={twitter} alt='Twitter'/>Twitter</div>  */}
        <div><img src={gmail} alt="Email"/>Email</div>        
    </div>
  )
}
