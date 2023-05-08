import React from 'react'

import shards from './img/ShardsOfDalaya.png'
import doorsofdivergence from './img/doorsofdivergence.png'

export default function ProjectCardInfo({ activeCards }) {

    let cardContent = null;

    switch (activeCards) {
        case 'web-dev':
            cardContent = (
                <div className='project-grid'>
                    <div className='project-card' id='doors-of-divergence'>
                        <div className='project-card-info'>
                            <img src={doorsofdivergence} alt='Doors of Divergence' />
                            <p>Doors of Divergence is an escape room experience, where you and your friends will work together in a multiverse of stories that are all tied together. They are located in Brooklyn, NY, as a part of the FutureProof building. If you live in the NYC area, I highly recommend any of their escape rooms! Since their story is woven in such an intricate way, <a href='http://doorsofdivergence.com/rift'>I've built their tracking system</a>, where at the end of the experience, you will recieve codes to enter into the site, revealing achievements, lore, and a layout of the story you've seen so far.</p>
                            <br/>
                            <p>Skills uitilized:</p>
                            <p>Javascript/React, Google Firebase, Tailwind CSS, Photoshop</p>
                            <button>
                                <a href='https://github.com/Duke1014/DoorsOfDivergence' target='_blank' rel='noopener noreferrer'>Github</a>
                            </button>
                            <button>
                                <a href='https://doorsofdivergence.com/rift' target='_blank' rel='noopener noreferrer'>Tracking System</a>
                            </button>
                            <button>
                                <a href='https://doorsofdivergence.com/' target='_blank' rel='noopener noreferrer'>Website</a>
                            </button>
                        </div>
                    </div>
                    <div className='project-card' id='to-do-list'>
                        <p>To-Do List</p>
                        <div className='project-card-info'>
                            <p>hello I have yet to write things here wow :)</p>
                        </div>
                    </div>
                </div>
            )
        break;
        case 'game-dev':
            cardContent = (
                <div className='project-grid'>
                    <div className='project-card' id='shards-of-dalaya'>
                        <div className='project-card-info'>
                            <img src={shards} alt='Shards of Dalaya' />
                            <p>Shards of Dalaya is an emulated EverQuest server, and part of the <a href='http://www.eqemulator.org/'>EQEmu community</a>. Filled with custom content throughout the world, players will find a completely unique experience here compared to the original EverQuest game. I've made a couple of raids, quests, and zones throughout the game, including the powerful Spiny Mole.</p>
                            <br/>
                            <div className='project-card-info-bottom'>
                                <p>Skills uitilized:</p>
                                <p>Lua, C++, TortoiseSVN</p>
                                <p><a href='https://shardsofdalaya.com/' target="_blank" rel="noopener noreferrer">Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        break;
        case 'music':
            cardContent = (
                <div className='project-grid'>
                    <div className='project-card'>
                        <p>Coming soon!</p>
                    </div>
                </div>
            )
        break;
    }

  return (
    <div>
        {cardContent}
    </div>
  )
}

