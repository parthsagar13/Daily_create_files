// eslint-disable-next-line import/no-anonymous-default-export
// export  const  UpdateStatus = (status)=>{
//     return {
//         type:'UPDATE_STATUS',
//         payload:status
//     }
// }

import { createAction } from "@reduxjs/toolkit"




//Update state with createAction
 export const UpdateStatus = createAction('UPDATE_STATUS')


//Update state with Async Action
// export  const fetchName = () => {
//     return async (dispatch) =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//       const result = await res.json()
//       dispatch({type:'UPDATE_NAME', payload:result[0].name})}
// }