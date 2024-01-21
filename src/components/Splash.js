import React from 'react'
import "./SplashStyles.css"
import IntroImg from '../assets/intro-img.jpeg'
import { Link } from 'react-router-dom'

const Splash = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>Hi! Welcome to my Website!</p>
            <h1>My Portfolio</h1>
            <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Splash