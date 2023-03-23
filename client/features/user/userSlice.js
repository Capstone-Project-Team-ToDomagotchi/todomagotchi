import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Create thunk for single user
export const fetchSingleUser = createAsyncThunk("users", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    console.log("data--->", data);
    return data;
  } catch (err) {
    console.error(err);
  }
});

//Create thunk to edit single user
export const editSingleUser = createAsyncThunk(
  "editUser",
  async ({ id, username, displayName, pronouns, aboutMe }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, {
        username,
        displayName,
        pronouns,
        aboutMe,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);



const initialState = {
  singleUser: [],
};

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
// export const selectSelectedPet = (state) => {
//   return state.selectPet;
// };
export default singleUserSlice.reducer;

