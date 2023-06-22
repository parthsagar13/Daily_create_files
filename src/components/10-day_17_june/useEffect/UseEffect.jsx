import React, { useState, useEffect } from 'react';

export default function UseEffect () { 
  const [count, setCount] = useState(2000);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    
    document.title = `You clicked ${count} times`;
    console.log('parth')
  },);
  

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 50)}>
      Click me
      </button>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';

// export default function Usestate () { 
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });


//   return (
//     <div>
//       <h1>You clicked {count} times</h1>
     
//     </div>
//   );
// }


