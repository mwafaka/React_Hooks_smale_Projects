import React from 'react'
import './Intro.scss'
import { init } from 'ityped'
import {useEffect,useRef} from 'react';

function Intro() {
    const textRef=useRef();

    useEffect(() => {
     init(textRef.current,{
         showCursor:true,
         strings: ['Full stack web developer']
     })
    }, [])
    return (
        <div className='Intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    
                    <img src="assets/man.jpg" alt= ""/>
                    
                    </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I ’m </h2>
                    <h1>Muafak Arbash</h1>
                    <h3>Freelance <span ref={textRef}></span> </h3>
                </div>
            <a href='#portfolio'>
           <img src='assets/angle_Down.png' alt=''/>
            </a>
            </div>
        </div>
    )
}

export default Intro 
