import React from 'react'

import ToDoList from './img/ToDoList.png'

export default function DevWork() {

  return (
    <div>
        <div className='to-do-list'>
            <h2>To-Do List</h2>

            <img src={ToDoList} alt='To Do List' />

            https://to-do-list-capstone.herokuapp.com/

            <p>
                My capstone project for Flatiron School. Since 'apps' have been developed for phones, I've struggled to find a to-do list app that really fit my needs. I plan on further developing this app to get closer to this goal, but what I have done so far makes this a much better product for anyone who uses it.
                <br/>
                To add more functionality for others than myself, I've integrated a Group To-do List, where you can create your own group that you can invite others to, and have a joint list to work on. 
            </p>
        </div>
    </div>
  )
}
