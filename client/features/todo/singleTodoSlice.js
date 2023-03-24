import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get the user's single todo
export const fetchSingleTodo = createAsyncThunk("singleTodo", async (id) => {
  try {
    const { data } = await axios.get(`/api/todos/${id}`);
    console.log("data---->", data);
    return data;
  } catch (err) {
    console.error(err);
  }
});
/**
 * edit a single todo
 * @returns todo information it received from the AJAX request
 * @catches error if database request goes wrong
 */
// export const editSingleTodo = createAsyncThunk(
//   "editSingleTodo",
//   async ({ id, dueDate, toDoName, pointType, description, isCompleted }) => {
//     try {
//       const { data } = await axios.put(`/api/todos/${id}`, {
//         dueDate,
//         todoName,
//         description,
//         pointType,
//         isCompleted,
//       });
//       return data;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// );

//edit a single todo
export const editSingleTodo = createAsyncThunk(
  "todo/edit",
  async (todoData) => {
    try {
      const { data } = await axios.put(
        `/api/todos/${todoData.id}`,
        todoData.formValues
      );
      console.log("data---->", data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

//delete a single todo
export const deleteSingleTodo = createAsyncThunk(
  "deleteSingleTodo",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

//set state
const initialState = {
  todo: {},
  status: "idle",
  error: null,
};

//slices
export const singleTodoSlice = createSlice({
  name: "singleTodo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchSingleTodo.fulfilled, (state, action) => {
    //   return action.payload;
    // });
    // builder.addCase(editSingleTodo.fulfilled, (state, action) => {
    //   return action.payload;
    // });
    builder.addCase(fetchSingleTodo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSingleTodo.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.todo = { ...state.todo, ...action.payload };
    });
    builder.addCase(fetchSingleTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(editSingleTodo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editSingleTodo.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.todo = { ...state.todo, ...action.payload };
    });
    builder.addCase(editSingleTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(deleteSingleTodo.fulfilled, (state, action) => {
      const newState = state.filter((todos) => todos.id !== action.payload.id);
      return newState;
    });
  },
});

export const selectSingleTodo = (state) => {
  return state.singleTodo;
};

export default singleTodoSlice.reducer;
