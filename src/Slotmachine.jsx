import React from 'react'
import App from './App'
import data from './Data'

let Machinegame=(props)=>
{

    let{x,y,z}=props

    if((x===y)&&(y===z))


    {
        return(

            <>

            <h2>{x} {y} {z}</h2>
            
            <h1>This is matching</h1>
            <hr></hr>

            </>


        )
       
    }

    else{

        return(

            <>

            <h2>{x} {y} {z}</h2>
        <h2>This is not maching</h2>
        <hr></hr>

        </>
        )
        
    }


}

export default Machinegame;






