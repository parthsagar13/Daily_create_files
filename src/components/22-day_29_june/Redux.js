import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  imageData: [],
  status: 'idle',
  error: null,
};

export const fetchImageData = createAsyncThunk(
  'news/fetchImageData',
  async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-05-29&sortBy=publishedAt&apiKey=fa10b28af04b49ec81f88a51d60ad431');
      return response.data.articles;
    } catch (error) {
      throw Error('Failed to fetch image data');
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImageData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.imageData = action.payload;
      })
      .addCase(fetchImageData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
