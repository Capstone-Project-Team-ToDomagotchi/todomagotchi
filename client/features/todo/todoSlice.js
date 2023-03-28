import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//get the user's list of todos
export const fetchTodosAsync = createAsyncThunk("todos", async (userId, thunkAPI) => {
  try {
    const { data } = await axios.get(`/api/todos?userId=${userId}`);
    console.log(data)
    return data;
  } catch (err) {
    console.err(err);
  }
});
//add a single todo
export const addNewTodo = createAsyncThunk(
  "addNewTodo",
  async ({ userId, dueDate, todoName, pointType, description, isCompleted }) => {
    try {
      const { data } = await axios.post(`/api/todos/addNewTodo`, {
        userId,
        dueDate,
        todoName,
        description,
        pointType,
        isCompleted,
      });
      console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
export const toggleCompleted = createAsyncThunk(
  "todos/toggleCompleted",
  async ({ id, isCompleted }) => {
    try {
      const { data } = await axios.put(`/api/todos/${id}/toggle`, {
        isCompleted: isCompleted});
        console.log(data)
       return data;
    } catch (err) {
      console.error(err);
    }
  }
);
const initialState = [];
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(toggleCompleted.fulfilled, (state, action) => {
      return action.payload;
    })

  },
});
export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;
