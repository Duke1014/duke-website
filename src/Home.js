import { useState } from 'react'

import gremlin from './assets/a gremlin.jpg'

import Start from './pages/Start'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export default function Home() {

  const [currentSection, setCurrentSection] = useState("Start")
    
  return (
    <div className='home'>
      <div className='my-image-container' >
        <img src={gremlin} alt='Duke' className='my-image'/>
      </div>
      {currentSection === "Start" && <Start setCurrentSection={setCurrentSection} />}
      {currentSection === "About" && <About setCurrentSection={setCurrentSection} />}
      {currentSection === "Projects" && <Projects setCurrentSection={setCurrentSection} />}
      {currentSection === "Contact" && <Contact setCurrentSection={setCurrentSection} />}
    </div>
  )
}
