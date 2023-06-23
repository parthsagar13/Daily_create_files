import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Product() {
  return (
    <div>
      <nav >
        <Link to="featuredproduct" >Featured</Link>
        <Link to="newproduct" >New</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
