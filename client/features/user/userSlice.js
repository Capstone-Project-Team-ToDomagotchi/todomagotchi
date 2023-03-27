import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Create a thunk to fetch all users
export const fetchUsersAsync = createAsyncThunk("users", async () => {
  try {
    console.log('fetching users')
    const { data } = await axios.get('/api/users');
    console.log('users fetched')
    return data;
  } catch (err) {
    console.error(err)
  }
});


//Set initial state for users
const initialState = [];

//Create slice for users
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      return action.payload;
    })
  },
});

//Create selector for single user
export const selectUsers = (state) => {
  return state.users;
};
export default userSlice.reducer;

