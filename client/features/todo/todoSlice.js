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

// //add a single todo
export const addNewTodo = createAsyncThunk('addNewTodo', async({dueDate, toDoName, pointType, description, isCompleted}) => {
    try {
        // console.log("dispatched from adding a todo")
        const { data } = await axios.post("/api/todos", {dueDate, toDoName, description, pointType, isCompleted});
        
        return data;
    } catch (err) {
        console.error(err)
    }
})

const initialState = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(addNewTodo.fulfilled, (state, action) => {
            state.push(action.payload);
        })
    }
});

export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;