import { useState } from 'react'
import BackButton from '../components/BackButton'
import { cardInfo } from '../components/CardInfo'

export default function Projects({ setCurrentSection }) {

    const [currentProject, setCurrentProject] = useState(1)

    const handleProjectChange = (e) => {
        setCurrentProject(currentProject + e)
    }

    return (
      <div className='project-container'>
        <div className='project-title'>
            <h2>{cardInfo.projects[currentProject].title}</h2>
        </div>
        <div className='project-image'>

        </div>
        <div className='project-info'>
            <p>{cardInfo.projects[currentProject].info}</p>
        </div>
        <div className='project-skills'> 
            {cardInfo.projects[currentProject].skills.map((skill, k, arr) => {
                return <span key={k}>{skill}{k < arr.length - 1 ? ' | ' : ' '}&nbsp;</span>
            })}
        </div>
        <div className='project-links'>

        </div>
        <div className='project-buttons'>
            {currentProject !== 1 ? <button onClick={() => handleProjectChange(-1)}>Prev</button> : <></>}
            {currentProject !== Object.keys(cardInfo.projects).length ? <button onClick={() => handleProjectChange(1)}>Next</button> : <></>}
        </div>
        <BackButton setCurrentSection={ setCurrentSection }/>   
      </div>
    )
}
