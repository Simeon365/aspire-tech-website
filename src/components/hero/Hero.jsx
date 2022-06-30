import React from 'react'
import './Hero.css'
import Aspire from '../../assets/Logo_White.png'
const Hero = () => {
  return (
    <div className='hero__container'>
        <div className='text'>
        <h5>Contact us: <a href='mailto:selmaaula15@gmail.com'> selmaaula15@gmail.com</a></h5>
        <h2>Coming Soon</h2>  
        <h1>Unlike your character, this website is undergoing development.</h1>
        <h3>Pop back in again soon though.</h3>
        </div>
        <div className='image'>
            <img src={Aspire}  alt="logo"/>
        </div>
    </div>
    
  )
}

export default Hero