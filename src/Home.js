import { useEffect, useState } from 'react'

import Start from './Start'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

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
