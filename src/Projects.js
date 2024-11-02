import React
// , { useState }
from 'react'

import ProjectCardInfo from './ProjectCardInfo'

export default function Projects() {

    // const [activeCards, setActiveCards] = useState('web-dev')

    // const showCard = (type) => {
    //     if (type === 'web') {
    //         setActiveCards('web-dev')
    //     } else if (type === 'game') {
    //         setActiveCards('game-dev')
    //     } else if (type ==='music') {
    //         setActiveCards('music')
    //     }
    // }

  return (
    <div className='devwork' id='projects'>
        <div className='project-banner'>
            Projects
        </div>
        {/* <div className='project-buttons'>
            <span className='project-button' id='web-dev' onClick={() => showCard('web')}>
                Web Development
            </span>
            <span className='project-button' id='game-dev' onClick={() => showCard('game')}>
                Game Development
            </span>
            <span className='project-button' id='music' onClick={() => showCard('music')}>
                Music
            </span>
        </div> */}
        <div>
            <ProjectCardInfo 
                // activeCards={activeCards}   
            />
        </div>
    </div>
  )
}
