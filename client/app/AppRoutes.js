import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from "./store";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import User from "../features/user/userPage";
import EditUser from "../features/user/editUser";
import Todos from "../features/todo/todoList";
import SingleTodo from "../features/todo/todoDetail";
import NewTodo from "../features/todo/NewTodo";
import EditTodo from "../features/todo/editTodo";
import PetProfile from "../features/pet/PetProfile";
import AllPets from "../features/pet/AllPets";

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
          {/* Routes placed here are available to only logged in users. */}
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<SingleTodo />} />
          <Route path="/addNewTodo" element={<NewTodo />} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
          <Route path="/pets/:id" element={<PetProfile />} />
          <Route path="/pets" element={<AllPets />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          {/* Routes placed here are available to all visitors */}
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />
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
