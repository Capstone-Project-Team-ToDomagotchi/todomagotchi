import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./singleUserSlice";
import styles from "../styles/TodoSnapshot.module.css";

//Component to display a few details from todos list
const TodosSnapshot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { todos } = singleUser;

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleUser(id));
    }
  }, [dispatch, id]);

  return (
    <main className={styles.todoContainer}>
    <h2 className={styles.homeHeader}>Current Todos</h2>
    {todos && todos.length ? (
      todos
      .filter((todo) => !todo.isCompleted)
      .map((todo) => (
        <section className={styles.todoList} key={todo.id}>
          <Link to={`/todos/${todo.id}`}>Name: {todo.todoName} </Link> 
          <p className="due">Deadline: {todo.dueDate}</p>
          <a href="/todos">See All Todos</a>
        </section>
      ))
    ) : (
      <p>No todos exist for this user</p>
    )}
    </main>
  );
};

export default TodosSnapshot;
