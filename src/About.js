import React, { useEffect, useState } from 'react'

export default function About() {

    let age = null
    let birth = new Date("1996-10-14")

    const [ageContent, setAgeContent] = useState(null)

    useEffect(() => {
        let today = new Date()
        let calcOne = today - birth
        age = calcOne / 31557600000
        console.log(age)
        setAgeContent(<p>I am {age} years old.</p>)
    }, [])

    return (
        <div className='about'>
            {ageContent}
        </div>
    )
}
