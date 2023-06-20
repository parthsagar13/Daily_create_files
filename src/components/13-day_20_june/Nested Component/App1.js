import React from 'react'
import { useState } from 'react';


export default function App1() {
    const [UIColor, setUIColor] = useState(null);
  
    //perent Component

    //  our callback Fuction

    const getColor = (color) => {
        setUIColor(color)
    }
  return (
    <div   >
      <div style={{ backGround: `${UIColor}` } }>
      </div>
     <CallBack getColor={getColor}/>
    </div>
  )
}

const CallBack = () => {

  return (
   <input
        type='text'
        id='input'
       
   />
  )
}