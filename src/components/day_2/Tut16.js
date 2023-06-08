import React, { useState } from 'react'

export default function Tut16() {
    const [show,setShow]=useState(true)
  return (
    <div className="App">
    
     {
       show?<h1>Hello World !</h1>:null
     }
     {/* <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button> */}
<button onClick={()=>setShow(!show)} >Toggle</button> 
    </div>
  )
}
