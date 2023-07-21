import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const api = "http://localhost:4000/orders/";

export const makeOrder = createAsyncThunk("order/make", async (orderData) => {
  try {
    await axios.post(`${api}add`, orderData);
  } catch (error) {
    console.log(error);
  }
});

export const getUserOrders = createAsyncThunk("oder/getUesr", async (id) => {
  try {
    let response = await axios.get(`${api}user/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    shippingAdress: JSON.parse(localStorage.getItem("address")) || {},
    isPaid: false,
  },
  reducers: {
    setAddress: (state, action) => {
      state.shippingAdress = action.payload;
      console.log(state.shippingAdress);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export const { setAddress } = OrderSlice.actions;
export default OrderSlice.reducer;
