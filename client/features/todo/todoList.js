import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectTodo, fetchTodosAsync, toggleCompleted } from "./todoSlice";
import styles from "../styles/Todos.module.css"
// import { addExpToPet, fetchSelectPetAsync, selectSelectedPet } from "../pet/selectPetSlice";
import { fetchSingleUser, addExpToPet, selectSingleUser } from "../user/singleUserSlice";

const Todos = () => {
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(selectTodo);
  const todosArray = Object.values(todos);
  const user = useSelector(selectSingleUser)
  // const pet = useSelector(selectSelectedPet)

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

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch]);

  console.log("user", user.selectPets?.[0].exp);

  const addExp = async (id, exp) => {
    await dispatch(addExpToPet({ id, exp }));
  };

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
              onChange={() => handleToggle(todo.id, todo.isCompleted) + addExp(user.selectPets?.[0].id, user.selectPets?.[0].exp)}
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
