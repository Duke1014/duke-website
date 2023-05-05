import React from 'react'

import html from './img/html.png'
import css from './img/css.png'
import javascript from './img/javascript.png'
import react from './img/react.png'
import tailwind from './img/tailwind.png'
import bootstrap from './img/bootstrap.png'
import node from './img/node.png'
import git from './img/git.png'
import ruby from './img/ruby.png'
import rails from './img/rails.png'
import postgresql from './img/postgresql.png'

import cplusplus from './img/cplusplus.png'
import csharp from './img/csharp.png'
import lua from './img/lua.png'
import tortoisesvn from './img/tortoisesvn.png'

import flstudio from './img/flstudio.png'
import studioone from './img/studioone.png'

export default function StartImages({ hoveredText }) {

    let images = null

    switch (hoveredText) {
        case 'se':
            images = (
                <div className='start-img'>
                    <img src={html} alt='html' />
                    <img src={css} alt='css' />
                    <img src={javascript} alt='js' />
                    <img src={react} alt='react' />
                    <img src={tailwind} alt='tailwind' />
                    <img src={bootstrap} alt='bootstrap' />
                    <img src={node} alt='node' />
                    <img src={git} alt='git' />
                    <img src={rails} alt='rails' />
                    <img src={postgresql} alt='postgresql' />
                    <img src={ruby} alt='ruby' />

                    <img className='invisible' src={cplusplus} alt='cplusplus' />
                    <img className='invisible' src={csharp} alt='csharp' />
                    <img className='invisible' src={lua} alt='lua' />
                    <img className='invisible' src={tortoisesvn} alt='tortoisesvn' />
                    <img className='invisible' src={flstudio} alt='flstudio' />
                    <img className='invisible' src={studioone} alt='studioone' />
                </div>
            )
        break;
        case 'gd':
            images = ( 
                <div className='start-img'>
                    <img className='invisible' src={html} alt='html' />
                    <img className='invisible' src={css} alt='css' />
                    <img className='invisible' src={javascript} alt='js' />
                    <img className='invisible' src={react} alt='react' />
                    <img className='invisible' src={tailwind} alt='tailwind' />
                    <img className='invisible' src={bootstrap} alt='bootstrap' />
                    <img className='invisible' src={node} alt='node' />
                    <img className='invisible' src={git} alt='git' />
                    <img className='invisible' src={rails} alt='rails' />
                    <img className='invisible' src={postgresql} alt='postgresql' />
                    <img className='invisible' src={ruby} alt='ruby' />

                    <img src={cplusplus} alt='cplusplus' />
                    <img src={csharp} alt='csharp' />
                    <img src={lua} alt='lua' />
                    <img src={tortoisesvn} alt='tortoisesvn' />


                    <img className='invisible' src={flstudio} alt='flstudio' />
                    <img className='invisible' src={studioone} alt='studioone' />
                </div> 
            )
        break;
        case 'mm':
            images =( 
                <div className='start-img'>
                    <img className='invisible' src={html} alt='html' />
                    <img className='invisible' src={css} alt='css' />
                    <img className='invisible' src={javascript} alt='js' />
                    <img className='invisible' src={react} alt='react' />
                    <img className='invisible' src={tailwind} alt='tailwind' />
                    <img className='invisible' src={bootstrap} alt='bootstrap' />
                    <img className='invisible' src={node} alt='node' />
                    <img className='invisible' src={git} alt='git' />
                    <img className='invisible' src={rails} alt='rails' />
                    <img className='invisible' src={postgresql} alt='postgresql' />
                    <img className='invisible' src={ruby} alt='ruby' />
                    <img className='invisible' src={cplusplus} alt='cplusplus' />
                    <img className='invisible' src={csharp} alt='csharp' />
                    <img className='invisible' src={lua} alt='lua' />
                    <img className='invisible' src={tortoisesvn} alt='tortoisesvn' />
                    
                    <img src={flstudio} alt='flstudio' />
                    <img src={studioone} alt='studioone' />
                </div>
            )
        break;
        default:
            images = (
                <div className='start-img'>
                    <img src={html} alt='html' />
                    <img src={css} alt='css' />
                    <img src={javascript} alt='js' />
                    <img src={react} alt='react' />
                    <img src={tailwind} alt='tailwind' />
                    <img src={bootstrap} alt='bootstrap' />
                    <img src={node} alt='node' />
                    <img src={git} alt='git' />
                    <img src={rails} alt='rails' />
                    <img src={postgresql} alt='postgresql' />
                    <img src={ruby} alt='ruby' />
                    <img src={cplusplus} alt='cplusplus' />
                    <img src={csharp} alt='csharp' />
                    <img src={lua} alt='lua' />
                    <img src={tortoisesvn} alt='tortoisesvn' />
                    <img src={flstudio} alt='flstudio' />
                    <img src={studioone} alt='studioone' />
                </div>
            )
        break;       
    }   

    return (
        <div>
            {images}
        </div>
    )
}
