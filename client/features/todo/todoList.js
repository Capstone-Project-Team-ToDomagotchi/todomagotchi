import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTodo, fetchTodosAsync } from "./todoSlice";

import styles  from "../styles/Todos.module.css"


const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

    return (
        <div className={styles.todo-container}>
            <Link to="/addNewTodo">Add a new task</Link>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <Link to={`/todos/${todo.id}`}>
                    <h3>To Do: {todo.todoName}</h3>
                    <h4>Due Date: {todo.dueDate}</h4>
                    <h5>{todo.isCompleted}</h5>
                    </Link>
                    </div>
                ))}
            </div>
     )}

export default Todos;
