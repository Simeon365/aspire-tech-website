import { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react'
import Slide from 'react-reveal/Slide';
import './Hero/Hero.css'

const Timer = () => {
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    let [days, setDays] = useState()
    let [hours, setHours] = useState()
    let [minutes, setMinutes] = useState()
    let [seconds, setSeconds] = useState()

  useEffect(()=>{
  
    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let currentDateAndTime = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - currentDateAndTime;

        // Time calculations for days, hours, minutes and seconds
        setDays(days = Math.floor(distance / (1000 * 60 * 60 * 24)))
        setHours(hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(seconds = Math.floor((distance % (1000 * 60)) / 1000));

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
  })
    


    return (
        <>
            <Slide left cascade>
                <div className='timer'>
                    
                    <div className='time'><h1>{days} </h1>Days</div>
                    <div className='time'><h1>{hours} </h1>Hours</div>
                    <div className='time'><h1>{minutes} </h1> Minutes</div>
                    <div className='time'><h1>{seconds} </h1>Seconds</div>
                </div>
            </Slide>
        </>
    )
}

export default Timer;