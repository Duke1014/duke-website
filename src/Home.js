import React, { useEffect, useState } from 'react'

// import ShardsOfDalaya from './img/ShardsOfDalaya.png'
// import linkedIn from './img/linkedin.png'
// import github from './img/github.png'
// import gmail from './img/gmail.png'
// import twitter from './img/twitter.png'
// import ToDoList from './img/ToDoList.png'
// import Soundboard from './img/Soundboard.png'
import Start from './Start'
import Devwork from './Devwork'
import Music from './Music'
import About from './About'
import Contact from './Contact'

export default function Home() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timeout);
  }, [])


  return (
    <div className='home'>
      <Start />
      {isVisible ? <>
        <Devwork />
        <Music />
        <About />
        <Contact />
      </> : <></>}
    </div>
  )
}
