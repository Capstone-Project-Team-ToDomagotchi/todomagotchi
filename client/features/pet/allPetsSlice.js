import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPetsAsync = createAsyncThunk("pets", async () => {
  try {
    const { data } = await axios.get("/api/pets");
    return data;
  } catch (err) {
    console.err(err);
  }
});

const initialState = {};

export const allPetsSlice = createSlice({
  name: "allsPets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPetsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllPets = (state) => {
    return state.allPets;
}
export default allPetsSlice.reducer