import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSelectPetAsync = createAsyncThunk(
    "selectPet",
    async ({ userId, petId }) => {
      try {
        const { data } = await axios.post(`/api/users/${userId}/selectpet`, {
          petId,
          userId,
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
    async ({ userId, petId, todoId }) => {
      try {
        const { data } = await axios.get(`/api/users/${userId}/selectedpet`, {
          petId,
          userId,
          todoId,
        });
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
      builder.addCase(selectedPetAsync.fulfilled, (state, action) => {
        // update state with the fetched data
        return action.payload;
      });
    },
  });
  
  //Create selector for single user
  
 
  export const selectSelectedPet = (state) => {
    return state.selectPet;
  };

  export default selectPetSlice.reducer