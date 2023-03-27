import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Create thunk to fetch single user
export const fetchSingleUser = createAsyncThunk("singleUser", async (id) => {
  try {
    console.log('get single user')
    const { data } = await axios.get(`/api/users/${id}`);
    console.log('got single user')
    return data;
  } catch (err) {
    console.error(err);
  }
});

//Create thunk to edit single user
export const editSingleUser = createAsyncThunk(
  "editUser",
  async ({ id, displayName, username, pronouns, aboutMe }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, {
        displayName,
        username,
        pronouns,
        aboutMe
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

//Set initial state for single user
const initialState = {};

//Create slice for single user
const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editSingleUser.fulfilled, (state, action) => {
      return action.payload;
    });
  
  },
});

//Create selector for single user
export const selectSingleUser = (state) => {
  return state.singleUser;
};
export default singleUserSlice.reducer;
