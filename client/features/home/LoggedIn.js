import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodosAsync } from "../todo/todoSlice";
import { fetchSingleUser } from "../user/singleUserSlice";
import TodosSnapshot from "../user/TodosSnapshot";
import PetSnapshot from "../user/PetSnapshot";
import ApiGet from "../ApiGet";
import OpenAI from "../Open/OpenAICom";

import styles from "../styles/LoggedIn.module.css";

const LoggedIn = () => {
  const user = useSelector((state) => state.auth.me.id);
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const pets = useSelector((state) => state.pet);

  useEffect(() => {
    dispatch(fetchSingleUser(user));
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <h3 className={styles.welcome}>Welcome, {username}!</h3>
      <section className={styles.loggedIn}>
        <section className={styles.quotesContainer}>
          <ApiGet />
        </section>
        <section className={styles.petContainer}>
          <PetSnapshot pets={pets} />
          <section>
            <OpenAI />
          </section>
        </section>
        <section className={styles.todosContainer}>
          <TodosSnapshot todos={todos} />
        </section>
      </section>
    </main>
  );
};

export default LoggedIn;
