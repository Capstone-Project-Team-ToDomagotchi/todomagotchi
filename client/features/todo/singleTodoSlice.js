import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get the user's single todo
export const fetchSingleTodo = createAsyncThunk("singleTodo", async (id) => {
    try {
        const { data } = await axios.get(`/api/todos/${id}`);
        return data;
    } catch (err) {
        console.error(err)
    }
});

//edit a single todo
export const editSingleTodo = createAsyncThunk('editSingleTodo', async({id, dueDate, toDoName, pointType, description, isCompleted}) => {
    try {
        const { data } = await axios.put(`/api/todos/${id}`, {dueDate, toDoName, description, pointType,isCompleted,});
        return data;
    } catch (err) {
        console.error(err)
    }
})

//delete a single to
export const deleteSingleTodo = createAsyncThunk('deleteSingleTodo', async(id) => {
    try {
        const { data } = await axios.delete(`/api/todos/${id}`);
        return data;
    } catch (err) {
        console.error(err)
    }
})

//set state
const initialState = {};

//slices
export const singleTodoSlice = createSlice({
    name: 'singleTodo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleTodo.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(editSingleTodo.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(deleteSingleTodo.fulfilled, (state, action) => {
            const newState = state.filter((todos) => todos.id !==action.payload.id)
            return newState;
        })
    }
});

export const selectSingleTodo = (state) => {
    return state.singleTodo;
};
export default singleTodoSlice.reducer;