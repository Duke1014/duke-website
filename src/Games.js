import React from 'react'

import ShardsOfDalaya from './img/ShardsOfDalaya.png'

export default function Games() {
  return (
    <div>
        <div className='shards-of-dalaya'>
            <h2>Shards of Dalaya</h2>
            <a href='https://shardsofdalaya.com/'><img src={ShardsOfDalaya} alt='Shards of Dalaya' /></a>
            <h4>A free Emulated Everquest server (EQEmu), with hundreds of hours of unique content, story, and loot.</h4>
            <p>Since 2005, My family and I had played Shards of Dalaya on and off with friends all over the world. Eventually, I had made friends with one of the developers, who was kind enough to take me under their wing for programming quests and monsters in the game in 2018, giving me the start in my career as a developer. If you see the elusive, powerful Spiny Mole, be sure to say hi to him for me!</p>
        </div>
    </div>
  )
}
