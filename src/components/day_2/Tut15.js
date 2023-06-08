import React, { useState } from 'react'

export default function Tut15() {
    const [data,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
    <h1>Hello World !</h1>
    {
      print?
      <h1> {data}</h1>
      :null
    }
   <input type="text" onChange={getData} />
   <button onClick={()=>setPrint(true)} >Print Data</button>
   </div>
  )
}
