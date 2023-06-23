import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Order Summary</h1>
      <br />
      <button onClick={() => navigate(-1) } className="btn btn-primary">Go Back</button>
    </div>
  )
}
