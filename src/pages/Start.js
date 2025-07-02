import { useState } from 'react'
import { text } from '../components/DukeText.js'

export default function Start({ setCurrentSection }) {

    const [dukeText, setDukeText] = useState(text.Start)
 
    const handleResponseButton = (e) => {
        console.log(e.target)
        let value = e.target.value

        switch (value) {
        case "About Me":
            console.log("Show about info");
            setCurrentSection("About")
            break;

        case "Recent Projects":
            console.log("Show recent projects");
            setCurrentSection("Projects")
            break;

        case "Contact Information and Links":
            console.log("Show contact info");
            setCurrentSection("Contact")
            break;

        default:
            if (text[value]) {
                setDukeText(text[value]);
            } else {
                console.warn(`No matching text entry for: ${value}`);
            }
            break;
        }
    }

    return (
        <div className='duke-talk-container'>
            <div className='duke-talk'>
                <div className='duke-text'>
                    {dukeText.duketext ? dukeText.duketext : dukeText}
                </div>
            </div>
            <div className='responses'>
                {dukeText.responses ? dukeText.responses.map((value, key) => {
                    return <button type='button' key={key} value={value} onClick={handleResponseButton}>{value}</button>
                }) : <></>}
            </div>
        </div>
    )
}
