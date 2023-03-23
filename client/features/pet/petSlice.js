import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Create thunk to fetch single pet
export const fetchSinglePetAsync = createAsyncThunk(
  "pets/singlePet",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/pets/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

//Create thunk to fetch single pet by userId
export const fetchPetByUserId = createAsyncThunk(
  "pets/fetchById",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/pets/${userId}/viewpets`);
      return data[0].pets;
    } catch (err) {
      console.log(err);
    }
  }
);

//Create thunk to add experience points to a pet
export const addExpToPet = createAsyncThunk(
  "pets/expUp",
  async ({ id, experience }) => {
    const { data } = await axios.put(`/api/pets/expUp/${id}`, {
      exp: exp,
    });
    return data;
  }
);

//Set initial state for single pet
const initialState = {
  pet: [],
};

//Create slice for single pet
export const singlePetSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePetAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchPetByUserId.fulfilled, (state, action) => {
      state.pet = action.payload;
    });
    builder.addCase(addExpToPet.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

//Create selector for single pet
export const selectSinglePet = (state) => {
  return state.pet;
};

export default singlePetSlice.reducer;
