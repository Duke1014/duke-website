import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const nav = navRef.current
      if (!nav) return
      const hideTop = `-${nav.offsetHeight}px`
      if (prevScrollpos > currentScrollPos) {
        nav.style.top = '0'
      } else {
        nav.style.top = hideTop
      }
      prevScrollpos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="navbar" ref={navRef} className='navbar'>
        <div className="my-name">
            <a href='#start'>Duke Norsworthy</a>
        </div>
        <div className="nav-links">
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
    </nav>
  )
}
