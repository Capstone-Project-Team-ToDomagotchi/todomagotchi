import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchSingleUser } from "../user/singleUserSlice";

import { selectTodo, fetchTodosAsync, toggleCompleted } from "./todoSlice";
import styles from "../styles/Todos.module.css";
import PetSnapshot from "../user/PetSnapshot";

const Todos = () => {
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(selectTodo);
  const todosArray = Object.values(todos);
  const pets = useSelector((state) => state.pet);

  const handleToggle = async (id, isCompleted) => {
    await dispatch(toggleCompleted({ id, isCompleted: !isCompleted }));
    await dispatch(fetchTodosAsync(userId));
  };
  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch, userId]);
  useEffect(() => {
    if (userId) {
      dispatch(fetchTodosAsync(userId));
    }
  }, [dispatch, userId]);

  // const dateNow = new Date();
  // const dayNum = dateNow.getDate();
  // const monthNum = dateNow.getMonth();
  // const yearNum = dateNow.getFullYear();
  // const fullDate = `${yearNum}0${monthNum+1}${dayNum}`
  // const numDate = Number(fullDate)

  // const convertDate = function (date) {
    
  // }
  // const dueNum = todos?.[0]?.dueDate;
  // const select = dueNum?.[0];
  // const yearStr = dueNum?.slice(0, 4);
  // const monthStr = dueNum?.slice(5, 7);
  // const dayStr = dueNum?.slice(8, 10);
  // const newNum = `${yearStr}${monthStr}${dayStr}`;
  // const dueNumInteger = Number(newNum);
  // console.log(numDate)
  // console.log(dueNumInteger)

  return (
    <div className={styles.todoContainer}>
      <div>
        <PetSnapshot pets={pets} />
      </div>
      <Link to="/addNewTodo">Add a new task</Link>
      <section className={styles.list}>
        <div className={styles.complete}>
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
        </div>
        <div className={styles.complete}>
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
        </div>
      </section>
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Todos;
