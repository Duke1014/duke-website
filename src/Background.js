import { useEffect, useState } from 'react'

export default function Background() {

    const [lines, setLines] = useState([]);

    useEffect(() => {
        let numLines = 35
        let newLines = [];

        for (let i = 0; i < Math.ceil(numLines / 2); i++) {
            const t = (i / (numLines - 1)) * 2 - 1; // -1 to 1
            const offset = Math.pow(t, 2) * 50;

            newLines.push(50 - offset); // top
            newLines.push(50 + offset); // bottom
        }

        setLines(newLines)
    },[])

    return (
        <div className='background-container'>
            <div className='line-effects'>
                {lines.map((value, index) => (
                    <div key={index} className="line" 
                        style={{ 
                            top: `${value}vh`, 
                            opacity: Math.round(Math.abs((value - 50) / 50) * 10) / 10
                        }} 
                    />
                ))}
            </div>
        </div>
  )
}
