import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPetsAsync = createAsyncThunk("pets", async () => {
  try {
    const { data } = await axios.get(`/api/pets`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  pets: [],
};

export const allPetsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPetsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllPets = (state) => {
  return state.pets;
};

export default allPetsSlice.reducer;
