import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSelectPetAsync = createAsyncThunk(
  "selectPet",
  async ({ id }) => {
    try {
      const { data } = await axios.get(`/api/pets/${id}`);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchPetGalleryAsync = createAsyncThunk(
  "selectPetGallery",
  async ({ userId, petId, name }) => {
    try {
      const { data } = await axios.post(`/api/users/${userId}/selectpet`, {
        petId,
        userId,
        name,
      });
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const selectedPetAsync = createAsyncThunk(
  "selectedPet",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/selectedpet`);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  selectPet: [],
};

const selectPetSlice = createSlice({
  name: "selectPet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSelectPetAsync.fulfilled, (state, action) => {
      // update state with the fetched data
      return action.payload;
    });
    builder.addCase(fetchPetGalleryAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(selectedPetAsync.fulfilled, (state, action) => {
      // update state with the fetched data
      state.selectPet = action.payload;
    });
  },
});

export const selectSelectedPet = (state) => {
  return state.selectPet;
};

export default selectPetSlice.reducer;
