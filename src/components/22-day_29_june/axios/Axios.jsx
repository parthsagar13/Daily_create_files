import { createAsyncThunk } from '@reduxjs/toolkit';

const axios = require('axios');


export const GetNews = createAsyncThunk(
    'fetchUser',
    axios.get('https://newsapi.org/v2/top-headlines?q=tesla&from=2023-05-29&sortBy=publishedAt&apiKey=fa10b28af04b49ec81f88a51d60ad431')
    .then((res) => [
        console.log(res.data)
    ])
)
// try {
// 	const response = await axios.request(GetNews);
// 	console.log(response.data);
// } catch (error) {   
// 	console.error(error);
// }