import { createReducer } from "@reduxjs/toolkit"
const initialState ={
    name:'Parth',
    age:'18',
    status:'Coder',
  }


// eslint-disable-next-line import/no-anonymous-default-export
// export default (state=initialState,action)  => {
//         if (action.type==='UPDATE_AGE') {
//             return {
//                 ...state,
//                 age: action.payload
//             }
//         }
//         return state
//     }


export default createReducer(initialState, (builder)=> {
    builder.addCase("UPDATE_AGE", (state,action)=>{

        state.age = action.payload
    })
    builder.addCase("UPDATE_NAME", (state,action)=>{

        state.name = action.payload
    })
})