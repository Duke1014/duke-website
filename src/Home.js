import { useEffect, useState } from 'react'

import Start from './pages/Start'
import Projects from './pages/Projects'
import About from './pages/About'
// import Contact from './Contact'

export default function Home() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {setIsVisible(true)}, 4000)
    return () => clearTimeout(timeout);
  }, [])

  return (
    <div className='home'>
      <Start />
      {isVisible ? <>
        <About />
        <Projects />
      </> : <></>}
    </div>
  )
}
