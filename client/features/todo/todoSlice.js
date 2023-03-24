import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get the user's list of todos
export const fetchTodosAsync = createAsyncThunk("todos", async () => {
  try {
    const { data } = await axios.get(`/api/todos`);
    return data;
  } catch (err) {
    console.err(err);
  }
});

//add a single todo
export const addNewTodo = createAsyncThunk(
  "addNewTodo",
  async ({ dueDate, todoName, pointType, description, isCompleted }) => {
    try {
      const { data } = await axios.post("/api/todos", {
        dueDate,
        todoName,
        description,
        pointType,
        isCompleted,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

//edit a single todo
// export const editTodo = createAsyncThunk("todo/edit", async (todoData) => {
//   try {
//     const { data } = await axios.put(
//       `/api/todos/${todoData.id}`,
//       todoData.formValues
//     );
//     console.log("data---->", data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// });

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    // builder.addCase(editTodo.pending, (state) => {
    //   state.status = "loading";
    // });
    // builder.addCase(editTodo.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   state.todo = { ...state.todo, ...action.payload };
    // });
    // builder.addCase(editTodo.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;
