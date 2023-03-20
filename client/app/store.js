import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import singlePetSlice from '../features/pet/petSlice';
import singleUserSlice from '../features/user/userSlice';
import singleTodoSlice from '../features/todo/singleTodoSlice';
import todoSlice from '../features/todo/todoSlice';
import allPetsSlice from '../features/pet/allPetsSlice';

const store = configureStore({
  reducer: { 
  auth: authReducer,
  pet: singlePetSlice,
  pets: allPetsSlice,
  singleUser: singleUserSlice,
  singleTodo: singleTodoSlice,
  todos: todoSlice, //was written with an s originally, had it removed
  // allPets: allPetsSlice,
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
