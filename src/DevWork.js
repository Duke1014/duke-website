import React from 'react'

import ToDoList from './img/ToDoList.png'
import Soundboard from './img/Soundboard.png'

export default function DevWork() {

  return (
    <div>
        <div className='to-do-list'>
            <h2>To-Do List</h2>
            <a href='https://to-do-list-capstone.herokuapp.com/'><img src={ToDoList} alt='To Do List' /></a>
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
            <a href='https://rails-project-soundboard.herokuapp.com/'><img src={Soundboard} alt='Soundboard' /></a>
            <h4>Ruby on Rails / React with User Authentification</h4>
            <p>
                My Phase 4 project for Flatiron School. This project was to be the framework of a soundboard with user authentification. While sharing sound on Zoom, one could theoretically use the soundboard to heighten an online event.
            </p>
        </div>
    </div>
  )
}
