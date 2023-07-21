import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cartApi = "http://localhost:4000/cart/"

export const getAllProducts = createAsyncThunk("Product/products", async () => {
  try {
    let response = await axios.get("http://localhost:4000/products/getAll");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getProductById = createAsyncThunk(
  "Product/getProductById",
  async (_id) => {
    try {
      let response = await axios.get(`http://localhost:4000/products/${_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "Product/addTocart",
  async ({ product, user, quantity }) => {
    try {
      let response = await axios.post(`${cartApi}add`, {
        product,
        user,
        quantity,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCartItems = createAsyncThunk(
  "Product/getCartItems",
  async (userId) => {
    try {
      let response = await axios.get(`${cartApi}${userId}`);
      console.log(userId)
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "Product/detelte",
  async (id) => {
    let response = await axios.delete(`${cartApi}${id}`);
    console.log(response);
  }
);

export const deleteCart = createAsyncThunk('Product/deleteCart', async ()=> {
  let response =  await axios.post(`${cartApi}checkout`);
  console.log(response)
})

export const updateCartItem = createAsyncThunk(
  "Product/updatCartItem",
  async ({ quantity, itemId }) => {
    try {
      console.log(quantity, itemId);
      let response = await axios.patch(`${cartApi}${itemId}`, {
        quantity,
      });
      console.log(response);
      // const userId = localStorage.getItem("id");
    } catch (error) {
      console.log(error);
    }
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    cartItem: {},
    cartItems: [],
    wishList: [],
    product: {},
  },

  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      console.log(state.products);
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      console.log(state.cartItems);
    });
  },
});


export default ProductSlice.reducer;
