import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./singleUserSlice";
import styles from "../styles/TodoSnapshot.module.css"

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

  const dateNow = new Date();
  console.log("current date", dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDay())
  console.log("due date", todos?.[0].dueDate)

  return (
    <main className={styles.todoContainer}>
    <h2 className={styles.homeHeader}>Current Todos</h2>
    {todos && todos.length ? (
      todos.map((todo) => (
        <section className={styles.todoList} key={todo.id}>
          <Link to={`/todos/${todo.id}`}>Name: {todo.todoName} </Link> |
          Deadline: {todo.dueDate}
        </section>
      ))
    ) : (
      <p>No todos exist for this user</p>
    )}
    </main>
  );
};

export default TodosSnapshot;
