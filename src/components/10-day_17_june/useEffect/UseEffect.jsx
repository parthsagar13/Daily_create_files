import React, { useState, useEffect } from 'react';

export default function UseEffect () { 
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
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


