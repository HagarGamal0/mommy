import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/user/";
const id = localStorage.getItem("id");

export const addbaby = createAsyncThunk(
  "mother/addBaby",
  async ({ babyInfo }) => {
    try {
      let response = await axios.patch(`${api}${id}`, babyInfo);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getBaby = createAsyncThunk("mother/getBaby", async () => {
  try {
    let response = await axios.get(`${api}baby/${id}`);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

const MotherSlice = createSlice({
  name: "mother",
  initialState: {
    baby: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBaby.fulfilled, (state, action)=> {
        state.baby = action.payload
        console.log(state.baby)
    });
  },
});

export default MotherSlice.reducer;
