import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleTodo = createAsyncThunk("singleTodo", async (id) => {
    try {
        const { data } = await axios.get(`/api/todos/${id}`);
        return data;
    } catch (err) {
        console.log(err)
    }
});

const initialState = {};

export const singleTodoSlice = createSlice({
    name: 'singleTodo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleTodo.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectSingleTodo = (state) => {
    return state.singleTodo;
};
export default singleTodoSlice.reducer;