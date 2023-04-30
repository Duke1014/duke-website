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
      
        {/* <div className='projects'>
          <div className='to-do-list'>
              <h2>To-Do List</h2>
              <a href='https://to-do-list-capstone.herokuapp.com/'>
                <img src={ToDoList} alt='To Do List' />
              </a>
              <h4>Ruby on Rails / React with User Authentification through useContext</h4>
              <p>
                  My capstone project for Flatiron School. Since 'apps' have been developed for phones, I've struggled to find a to-do list app that really fit my needs. I plan on further developing this app to get closer to this goal, but what I have done so far makes this a much better product for anyone who uses it.
                  <br/>
                  To add more functionality, I've integrated a Group To-do List, where you can create your own group that you can invite others to, and have a joint list to work on. 
              </p>
          </div>
          <br />
          <div className='soundboard'>
              <h2>Soundboard</h2>
              <a href='https://rails-project-soundboard.herokuapp.com/'>
                <img src={Soundboard} alt='Soundboard' />
              </a>
              <h4>Ruby on Rails / React with User Authentification</h4>
              <p>
                  My Phase 4 project for Flatiron School. This project is the framework of a soundboard with user authentification. While sharing sound on Zoom, one could theoretically use the soundboard to heighten an online event.
              </p>
          </div>
        </div> */}
        {/* <div className='music'>
          <a href='https://youtu.be/YS1Gb2ygeU4'>Duke with Randall Piper at the Sterling Renaissance Festival</a>
        </div> */}
        {/* <div className='games'>
          <div className='shards-of-dalaya'>
              <h2>Shards of Dalaya</h2>
 
              <h4>A free Emulated Everquest server (EQEmu), with hundreds of hours of unique content, story, and loot. (Lua/C++)</h4>
              <p>Since 2005, My family and I had played Shards of Dalaya on and off with friends all over the world. Eventually, I had made friends with one of the developers, who was kind enough to take me under their wing for programming quests and monsters in the game in 2018, giving me the start in my career as a developer. If you see the elusive, powerful Spiny Mole, be sure to say hi to him for me!</p>
          </div>
        </div> */}
        {/* <div className='gallery'>
          <div>Gallery :)</div>
        </div> */}
        {/* <div className='contact'>
          <div>
 
 
          </div> 
 
          </div>  */}
          {/* <div><img src={twitter} alt='Twitter'/>Twitter</div>  */}
          {/* <div>
            <a href = "mailto: duke.norsworthy@gmail.com">
              <img src={gmail} alt="Email"/>
            </a>
            Email
          </div>  
        </div> */}
    </div>
  )
}
