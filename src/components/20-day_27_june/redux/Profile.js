import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {UpdateStatus} from './Action'

export default function Profile() {
  const {name,age,status} = useSelector((state) => {
        return state
    })
     const dispatch = useDispatch()
    const UpdateAge = (age,name) => {
      dispatch({type:'UPDATE_AGE', payload:age})
      dispatch({type:'UPDATE_NAME', payload:name})
    }
    const UpdateStatus = (status) => {
      dispatch({type:'UPDATE_STATUS', payload:status})
    }

  
  return (
    <div>
      <h1>my name is {name}</h1>
      <h1>my Age is {age}</h1>
      <h1>my Status is {status}</h1>
      <div className="btn btn-primary">
        <button onClick={()=>UpdateAge(22,"sanket","Treader")}>update age</button>
        <button onClick={()=>UpdateStatus("Treader")}>update age</button>
        </div>

    </div>
  )
}
