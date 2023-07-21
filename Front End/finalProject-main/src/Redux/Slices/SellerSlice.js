import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/products/";

export const getAllProducts = createAsyncThunk(
  "seller/getAllProducts",
  async () => {
    try {
      const _id = await localStorage.getItem("id");
      console.log(_id);
      let response = await axios.get(`${api}seller/${_id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "seller/addProduct",
  async ({ form_data }) => {
    try {
      console.log(form_data);
      let response = await axios.post(`${api}add`, form_data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);

export const delProduct = createAsyncThunk("seller/delProduct", async (id) => {
  try {
    const response = await axios.delete(`${api}${id}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

export const editProduct = createAsyncThunk(
  "seller/editProduct",
  async ({ id, form_data }) => {
    try {
      const formData = {};
      for (const [key, value] of form_data.entries()) {
        formData[key] = value;
      }
      const response = await axios.patch(`${api}${id}`, formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const SellerSlice = createSlice({
  name: "seller",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: () => {
      console.log("pending");
    },

    [getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default SellerSlice.reducer;
