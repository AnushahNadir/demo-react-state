
import React, { useState } from 'react';

function Room() {
   let [isLit, setLit] = useState(false);
   let [isAge, setAge] = useState(33);
    
  return (
   <div>
        This room is {isLit? "lit": "dark"}
        <br/>
        <button onClick={()=> setLit(!isLit)} >Turn Light {isLit? "OFF" : "ON"}</button>
        <br/><br/>

        Age is {isAge}<br/>
        <button onClick={() => {
                console.log("Age Increased");
                setAge(++isAge);}} >
                Increase Age
        </button>
        <br/>
   </div>
  );
}

export default Room;
