import React from 'react'
import { createContext } from 'react';
import Child from './Child';
import { useState } from 'react';
import SuperChild from './SuperChild';
export const Globleinfo = createContext();
export default function UseContext() {
  // eslint-disable-next-line
  const [color, setColor] = useState("green");
  const [day, setDay] = useState("Monday");
  const getday = (item) =>{
    //  console.log(item)
     setDay(item)
  }

  return (
    <Globleinfo.Provider value={{ appColor: color , getday:getday }}>
    <div>
      <h1>App Component {day} </h1>
     <Child/>
     <SuperChild/>
    </div>  
    </Globleinfo.Provider>
  )
}
