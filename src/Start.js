import StartImages from './StartImages'
import gremlin from './img/a gremlin.jpg'

export default function Start() {

    // const [hoveredText, setHoveredText] = useState(null)

    // const handleHover = (type) => {
    //     setHoveredText(type)
    // }
    // const handleMouseOut = () => {
    //     setHoveredText(null)
    // }

    const scrollTimer = () => {
        // window.setInterval(function, milliseconds);
        // setTimeout(function, milliseconds)
        // clearTimeout(myVar);
    }

    return (
        <div className='start' id='start'>
            <div className='start-text'>
                <div className='slide-in start-one'>
                    <p>
                        Hello, my name is Duke.
                    </p>
                </div>
                <div className='slide-in start-two'>
                    <p>
                        I am a:<br/>
                        <span className='start-software-engineer' 
                            // onMouseOut={handleMouseOut} 
                            // onMouseOver={() => handleHover('se') }
                        >
                        <i className="fa-solid fa-code">
                        </i> software engineer</span><br/>
                        {/* <span className='start-game-developer' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('gd')}><i className="fa-solid fa-gamepad"></i> game developer</span><br/> */}
                        {/* <span className='start-musician' onMouseOut={handleMouseOut} onMouseOver={() => handleHover('mm')}><i className="fa-solid fa-music"></i> musician</span><br/> */}
                    </p>
                </div>
                <StartImages 
                    // hoveredText={hoveredText} 
                />
                <div className='about-start phase-in'>
                    <p>My passion is to bring incredible experiences and unique improvements to people's lives.</p>
                </div>
            </div>
            <div className='my-image-container'>
                <img src={gremlin} alt='Duke' className='my-image' />
            </div>
        </div>
    )
}
