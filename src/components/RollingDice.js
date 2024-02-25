import React, { useState } from 'react'
import DiceImage from './DiceImage';


export default function RollingDice() {
    const[arrays,setarray]=useState([])
    
    
  function diceRoll(){
    setarray([]);
    let ar=[];
    let index=0;
    ar.push({index:index,value:Math.floor((Math.random())*6)})
    index=index+1

    ar.push({index:index+1,value:Math.floor((Math.random())*6)})

    setarray(ar)
    
  }
  
return(
    <div className="container">
    {arrays.map((element,index)=>{
      return(
        <DiceImage key={index} element={element}/>)})
}
<button type="button" class="btn btn-primary" onClick={diceRoll}>Roll both the Dice</button></div>
  )
}
