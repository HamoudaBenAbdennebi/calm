import React,{useEffect, useState} from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler';

const Try = ()=>{
 const [timeLeft, setTimeLeft] = useState(120)
 const [show,setShow] = useState(false) 

 useEffect(() => {
   if (timeLeft> 0) {
     setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
   } else {
   
   }
 },[timeLeft]);

 const formatTime = (time) => ({
     minutes: Math.floor(time/60),
     seconds:Math.floor(time%60)
 })
    return(
        <div  className="timer">
            {show && <p style={{color: show ? 'red' : 'blue', fontWeight: 'bold',fontSize:'30px',padding:'0',margin:'0'}}>try again</p>}
            <p style={{color: show ? '#d43131' : '#1a3059',fontSize:'30px',padding:'0',margin:'0'}}>
        {formatTime(timeLeft).minutes}:{formatTime(timeLeft).seconds}
        </p>
        <KeyboardEventHandler handleKeys={['all']} onKeyEvent={(e) => {
            setShow(true)   
            setTimeout(()=>{setTimeLeft(120)
            setShow(false)
            },2000) 
            
            }}
             />
        </div>)
}

export default Try