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
  async ({ id, userName, displayName, pronouns, profilePic }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, {
        userName,
        displayName,
        pronouns,
        profilePic,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

// export const fetchSelectPetAsync = createAsyncThunk(
//   "selectPet",
//   async ({ userId, petId }) => {
//     try {
//       const { data } = await axios.post(`/api/users/${userId}/selectpet`, {
//         petId,
//         userId,
//       });
//       console.log(data);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const selectedPetAsync = createAsyncThunk(
//   "selectedPet",
//   async ({ userId, petId, todoId }) => {
//     try {
//       const { data } = await axios.get(`/api/users/${userId}/selectedpet`, {
//         petId,
//         userId,
//         todoId,
//       });
//       console.log(data);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

//Create slice and reducer for single user

const initialState = {
  singleUser: [],
  // selectPet: [],
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
    // builder.addCase(fetchSelectPetAsync.fulfilled, (state, action) => {
    //   // update state with the fetched data
    //   return action.payload;
    // });
    // builder.addCase(selectedPetAsync.fulfilled, (state, action) => {
    //   // update state with the fetched data
    //   return action.payload;
    // });
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
