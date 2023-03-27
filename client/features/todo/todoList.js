import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTodo, fetchTodosAsync, toggleCompleted } from "./todoSlice";

import styles from "../styles/Todos.module.css"

const Todos = () => {
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  console.log(todos)
  

  useEffect(() => {
    dispatch(fetchTodosAsync(userId));
    console.log(userId)
  }, [dispatch, userId]);

  const handleToggle = (id) => {
    dispatch(toggleCompleted({ id, isCompleted: !todos.isCompleted }));
  };

  const filteredTodos = todos.filter((todo) => todo.userId === userId);

  return (
    <div className={styles.todoContainer}>
      <Link to="/addNewTodo">Add a new task</Link>
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todos/${todo.id}`}>
            <h3>To Do: {todo.todoName}</h3>
          </Link>
          <h4>Due Date: {todo.dueDate}</h4>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleToggle(todo.id)}
          />
          <label>Completed</label>
        </div>
      ))}
    </div>
  );
}

export default Todos;


