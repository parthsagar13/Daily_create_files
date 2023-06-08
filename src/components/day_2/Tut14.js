import React, { useState } from 'react'
import Student from './Student'
export default function Tut14() {
    const [name,setName]=useState("Anil")
   
  return (
    <div className="App">
     <h1>Hello World !</h1>
     <h1>Props in React :)</h1>
     <Student name={name}/>
     <button onClick={()=>{setName("Sidhu")}} >Update Name</button>
    </div>
  )
}
