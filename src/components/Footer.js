import React from 'react'
import "./FooterStyles.css";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"white", marginRight: "2rem"}}/>
                    <div>
                        <p>123 example street.</p>
                        <p>United States.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"white", marginRight: "2rem"}}/> 512-634-6988</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}}/> ethankpope@icloud.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>Hi, I'm Ethan! I am a 16 year old student at Vista Ridge High School who is passionate about developing skills in computer science.</p>
                <div className='social'>
                    <a href='https://www.instagram.com/ethan.pope1/' target="_blank"><FaInstagram size={30} style={{color:"white", marginRight: "2rem"}}/></a>
                    <a href='https://github.com/EthanPope07' target='_blank'><FaGithub size={30} style={{color:"white", marginRight: "2rem"}}/></a>
                    <FaLinkedin size={30} style={{color:"white", marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer