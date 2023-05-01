import React, { useState } from 'react'

import shards from './img/ShardsOfDalaya.png'

export default function Devwork() {

    const [cardFocus, setCardFocus] = useState('')

    const openCard = (card) => {
        if (cardFocus === card) {
            setCardFocus('')
        } else {
            setCardFocus(card)
        }
    }

  return (
    <div className='devwork'>
        <p>Web-tools, games, apps.</p>
        <div className='project-card' id='doors-of-divergence' onClick={() => openCard('dod')}>
            <p>Doors of Divergence</p>
            {cardFocus === 'dod' ? <>
                <div className='project-card-info'>
                    <p>hello u have clicked on me and i show u more things wow :)</p>
                </div>
            </> : <></>}
        </div>
        <div className='project-card' id='shards-of-dalaya' onClick={() => openCard('sod')}>
            <p>Shards of Dalaya (EQEmu)</p>
            {cardFocus === 'sod' ? <>
                <div className='project-card-info'>
                    {/* <p>Shards of Dalaya is an emulated EverQuest server, and part of the <a href='http://www.eqemulator.org/'>EQEmu community</a>.</p> */}
                    <a href='https://shardsofdalaya.com/' target="_blank" rel="noopener noreferrer">
                        <img src={shards} alt='Shards of Dalaya' />
                    </a>
                </div>
            </> : <></>}
        </div>
        <div className='project-card' id='to-do-list' onClick={() => openCard('todo')}>
            <p>To-Do List</p>
            {cardFocus === 'todo' ? <>
                <div className='project-card-info'>
                    <p>hello u have clicked on me and i show u more things wow :)</p>
                </div>
            </> : <></>}
        </div>
    </div>
  )
}
