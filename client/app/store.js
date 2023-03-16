import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import petSlice from '../features/pet/petSlice';
import singleUserSlice from '../features/user/userSlice';

const store = configureStore({
  reducer: { auth: authReducer,
  pet: petSlice, user: singleUserSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
