import React from 'react'
import './index.css'
import Machinegame from './Slotmachine'
import data from './Data'

function Game(value){

    return(
  
      <>
  
      <Machinegame x={value.x} y={value.y} z={value.z} />
  
  
      </>
    )
  
  }


let APP=()=>{

return(

    <>
    <h1 className='heading'>Welcome to Slot Machine Game</h1>
    {data.map(Game)}

    
</>
)

}

export default APP;


