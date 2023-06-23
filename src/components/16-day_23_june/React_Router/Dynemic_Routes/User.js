import React from 'react'
import { Link } from 'react-router-dom'
import UserDetails from './UserDetails'

export default function User() {
  const Users = [
    { id: 1, name:"Parth", email:"kalathiyaparth@mail.com"},
    { id: 2, name:"kamal", email:"kalathiyaparth@mail.com"},
    { id: 3, name:"Ayush", email:"kalathiyaparth@mail.com"},
    { id: 4, name:"Nikunj", email:"kalathiyaparth@mail.com"},
    { id: 5, name:"Kiran", email:"kalathiyaparth@mail.com"},
  ]
  return (

    <>
    <br />
     {
      Users.map((item) => 
      <div><Link to={"/user/" + item.id}><h3>{item.name}</h3></Link></div> )
     }
    <UserDetails/>
    </>                    
  )
}
