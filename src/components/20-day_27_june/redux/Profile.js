import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUserName} from './CreateAsyncThunk'
import {ChangeAge,ChangeStatus } from './Reducer/UserReducer'
export default function Profile() {
  const {name,age,status} = useSelector((state) => {
        return state
    })


    const dispatch = useDispatch()
    // const UpdateAge = (age,name,status) => {
    //   dispatch(ChangeName(name))
    //   dispatch(ChangeAge(age))
    //   dispatch(ChangeStatus(status))
      
       
    //   }
    const UpdateAge = (age,name,status) => {
      dispatch(fetchUserName(name))
      dispatch(ChangeAge(age))
      dispatch(ChangeStatus(status))
    
   
      }


    
    // const changeStatus = (status) => {
    //   dispatch(UpdateStatus(status));
    // }

  
  return (
    <div>
      <h1>my name is {name}</h1>
      <h1>my Age is {age}</h1>
      <h1>my Status is {status}</h1>
      <div className="btn btn-primary">
        <button onClick={()=>UpdateAge(17,"Purvi","single")}>update age</button>
        {/* <hr/>
        <button onClick={()=>changeStatus("Treader")}>update status</button> */}
        </div>

    </div>
  )
}
