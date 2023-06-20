import React from 'react'
import { useState } from 'react';

export default function CallBack({ getColor}) {
    const [activecolor, setActivecolor] = useState();

    const handleChange = (e) => {
        const { value } = e.target;
        setActivecolor(value)
        getColor(value)

    }
  return (
   <input
        type='text'
        id='input'
        onChange={handleChange}
        value={activecolor}
   />
  )
}
