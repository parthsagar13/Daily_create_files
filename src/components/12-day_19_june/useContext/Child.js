import React from 'react'
import { Globleinfo } from './UseContext';
import { useContext } from 'react';

export default function Child() {
    const {appColor} = useContext(Globleinfo);
    // console.log(appColor)
  return (
    <div>
      <h1 style={{color: appColor}}>Child Component</h1>
      
    </div>
  )
}
