import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
export default function Tut35() {
    const [data,setData]=useState("Anil")
    const users = [
      { name: 'Parth', email: 'kalathiyaparth744@gmail.com', contact: '9510690056' },
      { name: 'sanjay', email: 'sanjay@test.com', contact: '222' },
      { name: 'haresh', email: 'haresh@test.com', contact: '111' }, 
      { name: 'ravi', email: 'ravi@test.com', contact: '777' },
      { name: 'vishal', email: 'vishal@test.com', contact: '777' },
    ]
  return (
    <div className="App">
        
    <Table striped variant="dark" >
      <tbody>
      <tr>      
        <td>Name</td>
        <td>Email</td>
        <td>Contacts</td>
      </tr>
      {
        users.map((item,i)=>
      
        <tr key={i}>
        <td>{item.name}</td>
        <td>{item.email}</td>
      <td>{item.contact}</td>
      </tr>
        )
      }
      </tbody>
    </Table>
  </div>
  )
}
