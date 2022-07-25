import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
    <div className='profile-parent'>

    <div className='profile-details'>
    
    <div className='colz'>
    <div className='colz-icon'>

    <a href='https://www.notion.so/REACT-63d7d3a504d94969a951e3f515f82772'>
    <i className="bi bi-linkedin"></i>
    </a>
    <a href='https://www.notion.so/REACT-63d7d3a504d94969a951e3f515f82772'>
    <i className="fa fa-instagram"></i>
    </a>
    <a href='https://www.notion.so/REACT-63d7d3a504d94969a951e3f515f82772'>
    <i className="fa fa-twitter"></i>
    </a>
    
    </div>    
    </div>

    <div className='profile-details-name'>
    <span className='primary-text'>
    {" "}
    Hello,I'm <span className='highlighted-text'> Sri Harsha Mutakodoor</span>
    </span>           
    </div>

    <div className='profile-details-role'>
    <span className='primary-text'>
    {" "}
    <h1>
    {" "}
    <Typical
    loop={Infinity}
    steps={[
      "Enthusiastic Dev ",
      2000,
      "Front-End  Developer",
      2000,
      "Probelm Solver",
      2000,
      "Javascript",
      2000,
    ]}
    /> 
    </h1>
    <span className='profile-role-tagline'>
    Knack of building applications with front and back end operations
    </span>
    </span>
    </div>

    <div className='profile-options'>
    <button className='btn primary-btn'>
    {""}
    Hire me{" "}
    </button>
    <a href="ESD18I013's Resume.pdf" download="Harsha's Resume">
    <button className="btn highlighted-btn">Get Resume</button>    
    </a>

    </div>
    </div>

    <div className='profile-picture'></div>
    <div className='profile-picture-background'></div>


    </div>
    </div>
  )
}
