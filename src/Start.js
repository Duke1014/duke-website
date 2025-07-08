import Contact from './Contact'
import gremlin from './img/a gremlin.jpg'

export default function Start() {

    return (
        <div className='start' id='start'>
            <div className='start-text'>
                <div className='my-image-container'>
                    <img src={gremlin} alt='Duke' className='my-image' />
                </div>
                <div className='start-one'>
                    <p>
                        Hello, my name is Duke.
                    </p>
                </div>
                <div className='start-two'>
                    <p>
                        I am a:<br/>
                        <span className='start-software-engineer'>
                            <i className="fa-solid fa-code"></i> software engineer
                        </span>
                    </p>
                </div>
                <div className='start-three'>
                    <p>My passion is to bring incredible experiences and unique improvements to people's lives.</p>
                </div>
                <Contact />
            </div>
        </div>
    )
}
