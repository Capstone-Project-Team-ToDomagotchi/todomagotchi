import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePetAsync = createAsyncThunk(
  "singlePet",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/pets/${id}`);
      console.log("data:", data)
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

//increment the experience by updating the todo?


const initialState = {
  pet: {},
};

export const singlePetSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePetAsync.fulfilled, (state, action) => {
      state.artwork = action.payload;
    });
    // builder.addCase(editArtworkAsync.fulfilled, (state, action) => {
    //   state = action.payload;
    // });
  },
});

export const selectSingleAPet = (state) => {
  return state.pet;
};

export default singlePetSlice.reducer;