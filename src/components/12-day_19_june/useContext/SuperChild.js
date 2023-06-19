import React from 'react'
import { Globleinfo } from './UseContext';
import { useContext } from 'react';
export default function SuperChild() {
    const {appColor, getday} = useContext(Globleinfo);
    const day = "Sunday"
  return (
    <div>
            <h1 style={{color: appColor}}>SuperChild Component</h1>
            <button onClick={()=> getday(day)}>CLick me</button>
    </div>
  )
}
