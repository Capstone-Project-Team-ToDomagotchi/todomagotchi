import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectTodo, fetchTodosAsync, toggleCompleted } from "./todoSlice";
import styles from "../styles/Todos.module.css";


const Todos = () => {
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(selectTodo);
  const todosArray = Object.values(todos);

  console.log(todos);

  const handleToggle = (id, isCompleted) => {
    dispatch(toggleCompleted({ id, isCompleted: !isCompleted }));
  };
  // const completedTodos = todosArray.filter(
  //   (todo) => todo.userId === userId && todo.isCompleted
  // );

  // const incompleteTodos =
  //   todosArray.filter((todo) => todo.userId === userId && !todo.isCompleted);

  useEffect(() => {
    if (userId) {
      dispatch(fetchTodosAsync(userId));
      console.log(userId);
    }
  }, [dispatch, userId]);

  return (
    <div className={styles.todoContainer}>
      <Link to="/addNewTodo">Add a new task</Link>
      <h2>Incomplete Todos:</h2>
      {todosArray
        .filter((todo) => todo.userId === userId && !todo.isCompleted)
        .map((todo) => (
          <div key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              <h3>To Do: {todo.todoName}</h3>
            </Link>
            <h4>Due Date: {todo.dueDate}</h4>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToggle(todo.id, todo.isCompleted)}
            />
            <label>Incomplete</label>
          </div>
        ))}
      <h2>Completed Todos:</h2>
      {todosArray
        .filter((todo) => todo.userId === userId && todo.isCompleted)
        .map((todo) => (
          <div key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              <h3>To Do: {todo.todoName}</h3>
            </Link>
            <h4>Due Date: {todo.dueDate}</h4>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToggle(todo.id, todo.isCompleted)}
            />
            <label>Completed</label>
          </div>
        ))}
        <br />
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Todos;
