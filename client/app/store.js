import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import selectPetSlice from '../features/pet/selectPetSlice'
import allPetsSlice from '../features/pet/allPetsSlice';
import singlePetSlice from '../features/pet/petSlice';
import userSlice from '../features/user/userSlice';
import singleTodoSlice from '../features/todo/singleTodoSlice';
import todoSlice from '../features/todo/todoSlice';



const store = configureStore({
  reducer: { 
  auth: authReducer,
  pets: allPetsSlice,
  allPets: allPetsSlice,
  selectPet: selectPetSlice,
  pet: singlePetSlice,
  user: userSlice,
  singleTodo: singleTodoSlice,
  todos: todoSlice,
  
  
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
