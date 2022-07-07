import React from 'react'
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import './Hero.css'
import Timer from '../Timer'
import Aspire from '../../assets/Logo_White.png';

const Hero = () => {
  return (
    <>
    <div className='top-bar'>
       <img className='image' src={Aspire} alt="logo" />
        <h4 className='text'>Contact us:<a href='mailto:selmaaula15@gmail.com'> selmaauala15@gmail.com </a></h4>
    </div>

    <div className="mid-bar">
      <div className='mid-info'>
  
     <h2 style={{textAlign: 'center'}}><Slide top cascade>Coming Soon</Slide></h2>
      <h1>Unlike your character, this website is undergoing development.</h1>
      </div>
  
        <Timer/>
       <Pulse> <h4 >Pop back in again <span style={{color: 'var(--color-primary)'}}><i>soon</i></span> though.</h4></Pulse>
      </div>
      {/* <div className='contact'>

      </div> */}

    </>

  )
}

export default Hero