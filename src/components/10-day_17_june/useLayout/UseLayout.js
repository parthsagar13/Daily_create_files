// useLayoutEffect, runs synchronously after a render but before the screen is updated.

// useEffect runs asynchronously and after a render is painted to the screen.

import React, { useState, useLayoutEffect } from "react";
          
const UseLayoutEffect = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) setNum(5 + Math.random() * 50);
  }, [num]);

  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => setNum(0)}>check</button>
    </>
  );
};

export default UseLayoutEffect;