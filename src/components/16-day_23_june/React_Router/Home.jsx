import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <>
      <h1>Home</h1>
      <br />
      <button onClick={() => navigate('ordersummary',  { replace : true })} className="btn btn-primary">Please Order</button>
      </>
    </div>
  )
}   
