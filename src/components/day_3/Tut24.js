

import React from 'react'
import User from './User'
function Tut24() {
const [name,setName]=React.useState("Anil")

  return (
    <div className="App">
     <h1>Hello World !</h1>
     <h1>Render Method in React</h1>
     <User />
     <button onClick={()=>setName("Sidhu")}>Update Name</button>
    </div>
  );
}