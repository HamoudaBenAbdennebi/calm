import React, {useState, useEffect} from 'react'
import {Howl, Howler} from 'howler';
import sea from '../assets/sea.mp3'
import useSound from 'use-sound'
const Main = () =>{
    const [play] = useSound(sea);
    const [time,setTime] = useState(120)
   const soundPlay = () =>{
        var sound = new Howl({
            src: sea
          });
          
          sound.play();
    }

    useEffect(() => 
       play

    ,[play])


  


    return(
        <>
 <p>
     try again 
 </p>

        </>
    )
}


export default Main