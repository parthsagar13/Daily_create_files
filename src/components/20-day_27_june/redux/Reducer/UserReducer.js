import {createSlice } from "@reduxjs/toolkit"
import { fetchUserName } from "../CreateAsyncThunk"
// import { UpdateStatus } from "../Action"
const initialState ={
    name:'Parth',
    age:'19',
    status:'Coder',
    articles: [],
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




// Reducer call with createReducer Fuction methode 1
// export default createReducer(initialState, (builder)=> {
//     builder.addCase("UPDATE_AGE", (state,action)=>{

//         state.age = action.payload
//     })
//     builder.addCase("UPDATE_NAME", (state,action)=>{

//         state.name = action.payload
//     })
//     builder.addCase(UpdateStatus, (state,action)=>{

//         state.status = action.payload
//     })
// })


// Reducer call with CreateSlice Fuction methode 2
const userReduscer =  createSlice({
    name:"person",
    initialState,
    reducers:{
        ChangeName(state,action){
            state.name = action.payload
        },
        ChangeAge(state,action){
            state.age = action.payload
        },
        ChangeStatus(state,action){
            state.status = action.payload
        }
    },
    extraReducers:{
        [fetchUserName.fulfilled]: (state,action) =>{
            state.name = action.payload  
        },
        [fetchUserName.pending]: (state,action) =>{
            state.name = "Loading" 
        },
        [fetchUserName.rejected]: (state,action) =>{
            state.name = "Try again" 
        }
    }
    
})

export const {ChangeName,ChangeAge,ChangeStatus } = userReduscer.actions
export default userReduscer.reducer