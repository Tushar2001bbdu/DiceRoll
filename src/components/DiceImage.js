import React from 'react'

export default function diceImage(props) 
{
  

if(props.element.value<=1){
    return(
    
            <img src={require('../icons/dice-1.png')} alt=""/>
        
    )
  }
  if(props.element.value==2){
    return(
        
            
            <img src={require('../icons/dice-2.png')} alt=""/>
        
    )
  }
  if(props.element.value==3){
    return(
       
            <img src={require('../icons/dice-3.png')} alt=""/>
            
           )
  }
  if(props.element.value==4){
    return(
       
            <img src={require('../icons/dice-4.png')} alt=""/>
            
      
    )
  }
  if(props.element.value==5){
    return(
        
            <img src={require('../icons/dice-5.png')} alt=""/>
     
    )
  }
  if(props.element.value==6){
    return(
       
            <img src={require('../icons/dice-6.png')} alt=""/>
      
    )
    }
}
