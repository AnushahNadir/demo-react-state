
import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [temp, setTemp] = useState(22);
    let [islit, setLit] = useState(true);
  return (
   <div className = {`room ${islit? "lit": "dark"}`}>
       The room is {islit}
       <br/>
       <button onClick = {()=>setLit(true)} >ON</button>
       <button onClick = {()=>setLit(false)} >OFF</button>   
       <br/><br/>
       The temperature is {temp}C
       <br/>
       <button onClick = {()=>setTemp(++temp)} >+</button>
       <button onClick = {()=>setTemp(--temp)} >-</button>
   </div>
  );
}

export default Room;
