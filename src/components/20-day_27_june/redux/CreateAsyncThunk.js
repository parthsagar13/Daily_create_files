import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserName = createAsyncThunk(
    'fetchUser',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
       return result[Math.floor(Math.random()*10)].name
    }
    )
