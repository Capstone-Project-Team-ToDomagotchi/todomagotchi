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

export const addExpToPet = createAsyncThunk(
  'expUp', async ({id, experience}) => {
    const {data} = await axios.put(`/api/pets/${id}`, {
      id: id,
      experience: experience,
    })
    return data;
  }
)
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
      return action.payload;
    });
    builder.addCase(addExpToPet.fulfilled, (state, action) => {
      state.pet = action.payload;
    });
    // builder.addCase(editPetAsync.fulfilled, (state, action) => {
    //   state = action.payload;
    // });
  }
});

export const selectSinglePet = (state) => {
  return state.pet;
};

export default singlePetSlice.reducer;