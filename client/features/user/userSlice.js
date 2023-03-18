import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleUser: []
};

//Create thunk for single user

export const fetchSingleUser = createAsyncThunk("users", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

  //Create thunk to edit single user
  export const editSingleUser = createAsyncThunk('editUser', async ({id, userName, displayName, pronouns, profilePic}) => {
    try{
    const { data } = await axios.put(`/api/users/${id}`, {userName, displayName, pronouns, profilePic});
      return data;
    } catch (err) {
      console.error(err)
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
      builder.addCase(editSingleUser.fulfilled, (state, action) => {
        return action.payload;
      })
    },
  });
  
  //Create selector for single user

  export const selectSingleUser= (state) => {
    return state.singleUser;
  };
  export default singleUserSlice.reducer;