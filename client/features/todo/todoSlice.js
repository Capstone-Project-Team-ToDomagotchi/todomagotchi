import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get the user's list of todos
export const fetchTodosAsync = createAsyncThunk('todos', async() => {
    try {
        const { data } = await axios.get(`/api/todos`)
        return data
    } catch (err) {
        console.err(err)
    }
});

const initialState = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;