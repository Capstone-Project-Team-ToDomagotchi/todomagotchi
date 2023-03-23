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
import CreateNewTodo from '../features/todo/newTodo';
import AllPets from '../features/home/AllPets';
import NotLoggedInHome from "../features/home/Home2";
import MainPage from '../features/home/Main';
import EditTodo from '../features/todo/editTodo';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  console.log("isLoggedIn", isLoggedIn);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/todos" element={<Todos />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path="/todos/:id" element={<SingleTodo />} />
          <Route path="/addNewTodo" element={<CreateNewTodo />} />
          <Route path="/pets/:id" element={<PetProfile/>} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/pets" element={<AllPets/>} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
        </Routes>
      ) : (
        <Routes>
          {/* Routes placed here are available to all visitors */}
          <Route path="/home" element={<NotLoggedInHome />} />
          <Route
            path="/login"
            element={<AuthForm name="login" authMethod="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" authMethod="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
