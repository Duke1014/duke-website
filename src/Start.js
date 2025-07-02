import { useEffect, useState } from 'react'
import gremlin from './img/a gremlin.jpg'
import { text } from './DukeText.js'

export default function Start() {

    const [dukeText, setDukeText] = useState(text.greetings)

    const [stopwatch, setStopwatch] = useState('')

    useEffect(() => {
        setInterval(timeCalc, 1000)
    }, [])

    const timeCalc = () => {
        let workDate = new Date(2025, 5, 23)

        workDate.setHours(0)
        let today = new Date()

        let calc = Math.abs(today - workDate)
        let dayCalc = calc / 86400000 
        let days = Math.floor(dayCalc)
        let hourCalc = dayCalc - days
        let hours = hourCalc * 24
        let minCalc = hours - Math.floor(hours)
        let mins = minCalc * 60
        let secCalc = mins - Math.floor(mins)
        let secs = secCalc * 60
        setStopwatch(`${days} days, ${Math.floor(hours)} hours, ${Math.floor(mins)} minutes, and ${Math.floor(secs)} seconds`) 
    }

    const handleResponseButton = (e) => {
        console.log(e)
        setDukeText(`Sorry friend. I started rebuilding this site to look WAY better than it did before - like literally started reworking it as of ${stopwatch} ago. I promise this will be way nicer shortly! If you are here as a possible recruiter, please check out my LinkedIn and GitHub - links are in the lower corner. Thank you!`)
    }

    return (
        <div>
            <div className='duke-talk-container'>
                <div className='duke-talk'>
                    <div className='my-image-container' >
                        <img src={gremlin} alt='Duke' className='my-image'/>
                    </div>
                    <div className='duke-text'>
                        {dukeText.duketext ? dukeText.duketext : dukeText}
                    </div>
                </div>
                <div className='responses'>
                    {dukeText.responses ? dukeText.responses.map((value, key) => {
                        return <button type='button' key={key} onClick={handleResponseButton}>{value}</button>
                    }) : <></>}
                </div>
                <div className='extra-stuff'>
                    This is where extra images or project info would go
                </div>
            </div>
        </div>
    )
}
