import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/todo/";

export const addTodo = createAsyncThunk("Todo/add", async (data) => {
  try {
    await axios.post(`${api}add`, data);
  } catch (error) {
    console.log(error);
  }
});

export const getTodos = createAsyncThunk("Todo/get", async (_id) => {
  try {
    const response = await axios.get(`${api}${_id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk("Todo/del", async(_id) => {
    try{
        const response = await axios.delete(`${api}${_id}`);
        console.log(response)
    }catch (error) {
        console.log(error);
    }
})

export const endTodo = createAsyncThunk('Todo/end', async (_id) => {
    try{
        const response = await axios.patch(`${api}${_id}`,{status: "completed"});
        console.log(response)
    }catch(error){
        console.log(error)
    }
})

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos: [],
    completed: [],
    pending: [],
  },
  reducers: {
    doneTodos : (state,action) => {
        state.completed = state.todos.filter((todo) => {
        return  todo.status === "completed"
        })
       state.todos = state.completed
    },
    pendingTodos : (state,action) => {
      state.pending = state.todos.filter((todo) => {
        return todo.status === "pending";
      })
      state.todos = state.pending
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { doneTodos,pendingTodos } = TodoSlice.actions;
export default TodoSlice.reducer;
