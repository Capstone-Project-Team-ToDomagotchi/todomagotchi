import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

//Create thunk for single user

export const fetchSingleUser = createAsyncThunk("singleUser", async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });
  
  //Create slice and reducer for single user

  const singleUserSlice = createSlice({
    name: "singleUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });
  
  //Create selector for single user

  export const selectSingleUser= (state) => {
    return state.singleUser;
  };
  export default singleUserSlice.reducer;