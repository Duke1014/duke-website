import React, { useState } from 'react'

import shards from './img/ShardsOfDalaya.png'
import doorsofdivergence from './img/doorsofdivergence.png'

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
        {/* <p>Web-tools, games, apps.</p> */}
        <div className={`project-card ${cardFocus === 'dod' ? 'expanded-card':''}`} id='doors-of-divergence' onClick={() => openCard('dod')}>
            <p>Doors of Divergence</p>
            {cardFocus === 'dod' ? <>
                <div className='project-card-info'>
                    <a href='https://doorsofdivergence.com'>
                        <img src={doorsofdivergence} alt='Doors of Divergence' />
                    </a>             
                    <p>Doors of Divergence is an escape room experience, where you and your friends will work together in a multiverse of stories that are all tied together. They are located in Brooklyn, NY, as a part of the FutureProof building. If you live in the NYC area, I highly recommend any of their escape rooms! Since their story is woven in such an intricate way, <a href='http://doorsofdivergence.com/rift'>I've built their tracking system</a>, where at the end of the experience, you will recieve codes to enter into the site, revealing achievements, lore, and a layout of the story you've seen so far.</p>
                    <br/>
                    <p>Skills uitilized:</p>
                    <p>Javascript/React, Google Firebase, Tailwind CSS, Photoshop</p>
                </div>
            </> : <></>}
        </div>
        <div className={`project-card ${cardFocus === 'sod' ? 'expanded-card':''}`} id='shards-of-dalaya' onClick={() => openCard('sod')}>
            <p>Shards of Dalaya (EQEmu)</p>
            {cardFocus === 'sod' ? <>
                <div className='project-card-info'>
                    <a href='https://shardsofdalaya.com/' target="_blank" rel="noopener noreferrer">
                        <img src={shards} alt='Shards of Dalaya' />
                    </a>
                    <p>Shards of Dalaya is an emulated EverQuest server, and part of the <a href='http://www.eqemulator.org/'>EQEmu community</a>.</p>
                    <br/>
                    <p>Skills uitilized:</p>
                    <p>Lua, C++, TortoiseSVN</p>
                </div>
            </> : <></>}
        </div>
        <div className={`project-card ${cardFocus === 'todo' ? 'expanded-card':''}`} id='to-do-list' onClick={() => openCard('todo')}>
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
