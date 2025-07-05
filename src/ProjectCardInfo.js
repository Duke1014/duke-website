import doorsofdivergence from './img/doorsofdivergence.png'

export default function ProjectCardInfo() {

    let cardContent = null;

            cardContent = (
                <div className='project-grid'>
                    <div className='project-card' id='doors-of-divergence'>
                        <div className='project-card-top'>
                            <div className='project-title-container'>
                                <div className='project-card-title'>
                                    <p id='title'>Lore Map</p>
                                    <p id='skills-title'>Skills uitilized:</p>
                                    <p id='skills'>Javascript/React, Google Firebase, Tailwind CSS, Photoshop</p>
                                </div>
                            </div>
                            <div className='project-card-img'>
                                <img src={doorsofdivergence} alt='Doors of Divergence' />
                            </div>
                        </div>
                        <div className='project-card-info'>
                            <p>The lore map is designed with the Doors of Divergence (DoD) escape room. DoD has multiple endings to each of their stories, with hidden achievements in each. The lore map is designed to show the player where they are in the story, what happened as they played, and what hidden bonuses they've uncovered. It also works as an active tracking system to show how far along someone is in the escape room!</p>
                            <br/>
                            <button>
                                <a href='https://github.com/Duke1014/lore-map' target='_blank' rel='noopener noreferrer'>Github</a>
                            </button>
                            <button>
                                <a href='https://doorsofdivergence.com/' target='_blank' rel='noopener noreferrer'>Doors of Divergence</a>
                            </button>
                        </div>
                    </div>

                    <div className='project-card' id='to-do-list'>
                        <div className='project-card-top'>
                            <div className='project-title-container'>
                                <div className='project-card-title'>
                                    <p>Let's To Do This!</p>
                                    <p>Skills Utilized:</p>
                                    <p>Javascript/React, Ruby on Rails, PostgreSQL</p>
                                </div>
                            </div>
                            <div className='project-card-img'>
                                {/* image goes here */}
                            </div>
                        </div>
                        <div className='project-card-info'>
                            <p>"Let's To Do This!" is a dynamic and collaborative app designed to streamline task management within groups. Whether you're coordinating with colleagues, friends, or family, this app enhances productivity and organization by allowing users to interact with group-shared to-do lists. Users can create and manage to-do lists that are shared with a designated group of people.</p>
                            <button>
                                <a href='https://github.com/Duke1014/to-do-list' target='_blank' rel='noopener noreferrer'>GitHub</a>
                            </button>
                        </div>
                    </div>

                    <div className='project-card'>
                        <div className='project-card-top'>
                            <div className='project-title-container'>
                                <div className='project-card-title'>
                                    <p>Wedding</p>
                                    <p>Skills Utilized:</p>
                                    <p>Javascript/React, launched via Netlify</p>
                                </div>
                            </div>
                        </div>
                        <div className='project-card-info'>
                            <p>Our wedding website! My wife and I came together to create a parody of a traditional website with our own touch in order to announce our surprise wedding. Includes a reversable doomsday clock to count down the time we say, "I do.", and a count up clock to show our time together. Our contributors towards the wedding have their own section to show off their work.</p>
                            <button>
                                <a href='https://github.com/Duke1014/wedding' target='_blank' rel='noopener noreferrer'>GitHub</a>
                            </button>
                            <button>
                                <a href='https://dukealamo.com' target='_blank' rel='noopener noreferrer'>Website</a>
                            </button>
                        </div>
                    </div>
                </div>
            )

  return (
    <div>
        {cardContent}
    </div>
  )
}

