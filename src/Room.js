
import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [temp, setTemp] = useState(22);
    let [islit, setLit] = useState(true);
  return (
   <div className = {`room ${islit? "lit": "dark"}`}>
       The room is {islit? "lit": "dark"}
       <br/>
       <button onClick = {()=>setLit(true)} >Turn the light ON</button>
       <button onClick = {()=>setLit(false)} >Turn the light OFF</button>   
       <br/><br/>
       The temperature is {temp}C
       <br/>
       <button onClick = {()=>setTemp(++temp)} >+</button>
       <button onClick = {()=>setTemp(--temp)} >-</button>
   </div>
  );
}

export default Room;
