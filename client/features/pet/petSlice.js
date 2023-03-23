import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePetAsync = createAsyncThunk(
  "pets/singlePet",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/pets/${id}`);
      console.log("data:", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchPetByUserId = createAsyncThunk(
  "pets/fetchById",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/pets/${userId}/viewpets`);
      console.log("data", data);
      return data[0].pets;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addExpToPet = createAsyncThunk(
  "pets/expUp",
  async ({ id, exp }) => {
    const { data } = await axios.put(`/api/pets/expUp/${id}`, {
      exp: exp,
    });
    return data;
  }
);
//increment the experience by updating the todo?

const initialState = {
  pet: [],
};

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

export const selectSinglePet = (state) => {
  return state.pet;
};

export default singlePetSlice.reducer;
