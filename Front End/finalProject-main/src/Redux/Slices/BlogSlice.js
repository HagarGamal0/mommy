import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBlogs = createAsyncThunk("Blog/getBlogs", async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/blogs/get"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getBlogById = createAsyncThunk("Blog/getBlogById", async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/blogs/${id}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addNewBlog = createAsyncThunk(
  "Blog/addNewBlog",
  async (from_data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/blogs/add",
        from_data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);

const BlogSlice = createSlice({
  name: "Blog",
  initialState: {
    blogs: [],
    oneBlog: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
    builder.addCase(getBlogs.pending, (state, action) => {
      console.log("pending")
    });
    builder.addCase(getBlogById.fulfilled, (state, action) => {
      state.oneBlog = action.payload;

    });
  },
});

export default BlogSlice.reducer;
