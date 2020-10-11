import React,{useEffect}  from 'react'
import ReactHowler from 'react-howler'
import music from '../assets/sea.mp3'

const Audio = () =>{
    useEffect(() => {
  window.Audio()
    })


return(<ReactHowler src={music} playing={true}/>)


}
    


export default Audio