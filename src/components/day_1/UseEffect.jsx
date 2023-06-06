import React from 'react'
import { useState, useEffect } from "react";
// import UseContext from './useContext';


function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      },2000);
    });
  return (
    <div>
        <h1>I have rendered {count} times!</h1>
        {/* <UseContext/> */}
    </div>
    
  ) 
}

export default UseEffect
  