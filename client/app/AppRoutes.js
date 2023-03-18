import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import SingleTodo from '../features/todo/todoDetail';
import Todos from '../features/todo/todoList';
import { me } from './store';
import PetProfile from '../features/pet/PetProfile';
import User from '../features/user/userPage';
import EditUser from '../features/user/editUser';
import AllPets from '../features/home/AllPets';


/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          {/* Routes placed here are available to users that are logged in */}
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<SingleTodo />} />
          <Route path="/pets/:id" element={<PetProfile/>} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path="/pets" element={<AllPets/>} />
        </Routes>
      ) : (
        <Routes>
          {/* Routes placed here are available to all visitors */}
          {/* // <Route path="/home" element={<NotLoggedInHome />} /> */}
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
