import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectTodo, fetchTodosAsync } from "../todo/todoSlice";
import { selectSingleUser, fetchSingleUser } from "../user/userSlice";
import TodosSnapshot from "../user/TodosSnapshot";
import PetSnapshot from "../user/PetSnapshot";

import styles from "../styles/Main.module.css";

const LoggedIn = () => {
  const user = useSelector((state) => state.auth.me.id);
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();

  const todos = useSelector(selectTodo);
  const singleUser = useSelector(selectSingleUser);
  const { selectPets } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(user));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <div className={styles.loggedIn}>
      <nav>
          <div>
            <h1>Welcome, {username}!</h1>
            <div className="pets-container">
              <PetSnapshot />
                </div>
            <div className="todo-container">
              <h2>Current To-Dos:</h2>
              <TodosSnapshot />
                  </div>
            </div>
      </nav>
      <hr />
    </div>
  );
};

export default LoggedIn;
