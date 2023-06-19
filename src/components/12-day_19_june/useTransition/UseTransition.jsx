import React from 'react'
import { useState } from 'react';
import { useTransition } from 'react'
import { Spinner } from 'react-bootstrap';

export default function UseTransition() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
 
    function handleClick() {
      startTransition(() => {
        setCount(count => count + 1);
      });
    }
  return (

    <div>
    {isPending && <Spinner />}
    <button onClick={handleClick}>{count}</button>
  </div>

  )
}
