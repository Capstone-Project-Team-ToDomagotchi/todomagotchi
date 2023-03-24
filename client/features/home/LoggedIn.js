import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodosAsync } from "../todo/todoSlice";
import { fetchSingleUser } from "../user/userSlice";
import TodosSnapshot from "../user/TodosSnapshot";
import PetSnapshot from "../user/PetSnapshot";
import ApiGet from "../ApiGet";

import styles from "../styles/Main.module.css";

const LoggedIn = () => {
  const user = useSelector((state) => state.auth.me.id);
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const pets = useSelector((state) => state.pet.pet)

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
            <section>
            <ApiGet />
          </section>
            <div className="pets-container">
              <PetSnapshot pets={pets}/>
                </div>
            <div className="todo-container">
              <TodosSnapshot todos={todos}/>
                  </div>
            </div>
      </nav>
      <hr />
    </div>
  );
};

export default LoggedIn;
