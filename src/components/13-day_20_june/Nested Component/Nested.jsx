import React from 'react'

 function Nested() {
  return (
    <>
      <h2>parth</h2>
      <Image/>
      <Parth/>
    </> 
  )
}



const  Image = () => {
    return(
     <img src="logo192.png"  />
    )
    }
const  Parth = () => {
    return(
        <h1>Parth sagar</h1>
        )
}


export default Nested;