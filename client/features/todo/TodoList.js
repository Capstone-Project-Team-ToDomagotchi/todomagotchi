import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchSingleUser } from "../user/singleUserSlice";
import { deleteSingleTodo } from "./singleTodoSlice";
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
    await dispatch(fetchSingleUser(userId));
  };

  const handleDelete = async (id, event) => {
    event.preventDefault();
    await dispatch(deleteSingleTodo(id));
    await dispatch(fetchTodosAsync(userId));
    navigate("/todos");
  };

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchTodosAsync(userId));
    }
  }, [dispatch, userId]);

  return (
    <main className={styles.todoContainer}>
      <section className={styles.list}>
        <div className={styles.petContainer}>
          <PetSnapshot pets={pets} />
        </div>
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
                <button
                  className="delete"
                  onClick={(event) => handleDelete(todo.id, event)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </section>
      <br />
      <Link to="/addNewTodo" className={styles.addTodo}>
        Add a new task
      </Link>
      <button onClick={() => navigate(-1)}>Go back</button>
    </main>
  );
};

export default Todos;
