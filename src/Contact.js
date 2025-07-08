<<<<<<< HEAD
=======
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import gmail from './img/gmail.png'

>>>>>>> 6afdf8139e402bb67e919fea0ec472e9ab16b777
import resume from './assets/Duke Norsworthy Resume.pdf'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            {/* <div className='contact-banner'>
                Contact
            </div> */}
            <div className='contact-buttons'>
                <a href='https://www.linkedin.com/in/duke-norsworthy/'>
                    <i className="fa fa-linkedin-square"></i>
                </a>
                <a href='https://github.com/Duke1014'>
                    <i className='fa fa-github'></i>
                </a>
                <a href='mailto:duke.norsworthy@gmail.com'>
                    <i className='fa fa-envelope'></i>
                </a>
                <a href={resume} download='Duke Norsworthy Resume.pdf' alt='Duke Norsworthy Resume'>
                    <i className='fa fa-file-pdf-o'></i>
                </a>    
            </div>
        </div>
    )
}
