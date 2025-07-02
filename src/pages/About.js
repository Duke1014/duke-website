import BackButton from '../components/BackButton'
import { cardInfo } from '../components/CardInfo'

export default function About({ setCurrentSection }) {

    // const section = "about"
    
    return (
        <div className='about-container'>
            <div className='about-title'>
                <h2>{cardInfo.about.softwareEngineer.title}</h2>
            </div>
            <div className='about-info'>
                <p>{cardInfo.about.softwareEngineer.info}</p>
            </div>
            <div className='about-skills'>
                {cardInfo.about.softwareEngineer.skills.map((skill, k, arr) => {
                    return <span key={k}>{skill}{k < arr.length - 1 ? ' | ' : ' '}&nbsp;</span>
                })}
            </div>
            <BackButton setCurrentSection={ setCurrentSection }/>           
        </div>
    )
}
