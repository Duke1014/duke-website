import linkedin from './img/linkedin.png'
import github from './img/github.png'
import gmail from './img/gmail.png'

import resume from './assets/Duke Norsworthy Resume.pdf'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='contact-banner'>
                Contact
            </div>
            <div className='contact-buttons'>
                <a href='https://www.linkedin.com/in/duke-norsworthy/'>
                    <img src={linkedin} alt='linkedin' />
                </a>
                <a href='https://github.com/Duke1014'>
                    <img src={github} alt='github' />
                </a>
                <a href='mailto:duke.norsworthy@gmail.com'>
                    <img src={gmail} alt='gmail' />
                </a>
                <a href={resume} download='Duke Norsworthy Resume.pdf'>
                    RESUME
                </a>    
            </div>
        </div>
    )
}
