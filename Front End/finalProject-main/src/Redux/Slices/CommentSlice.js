import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/comments/";
export const addComment = createAsyncThunk("comment/add", async (comment) => {
  try {
    let response = await axios.post(`${api}`, comment);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

export const getComments = createAsyncThunk("comment/get", async (id) => {
  console.log(id);
  try {
    let response = await axios.get(`${api}${id}`);
    console.log(response);
    return response.data
  } catch (err) {
    console.log(err);
  }
});

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state,action)=> {
            state.comments = action.payload;
            console.log(state.comments);
    })
  },
});

export default CommentSlice.reducer;
