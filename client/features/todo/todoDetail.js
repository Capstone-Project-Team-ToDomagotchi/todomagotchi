import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleTodo, fetchSingleTodo } from "./singleTodoSlice";

import styles from "../styles/TodoDetail.module.css"

const SingleTodo = () => {
  const { id } = useParams();
  const singleTodo = useSelector(selectSingleTodo);
  const { todoName, dueDate, description, isCompleted } = singleTodo;
  const [todo, setTodo] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleTodo(id));
  }, [dispatch, id]);

  const completeTodo = (index) => {
    const newTodo =[...todo];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
  }

  return (
    <div className={styles.singleTodoContainer}>
      <h2>{todoName}</h2>
      <p>{dueDate}</p>
      <p>{description}</p>
      {!todo.isCompleted && (
        <button onClick={() => completeTodo(index)}>{isCompleted}</button>
      )}
      <hr></hr>
      <Link to={`/todos/${id}/edit`}>Edit Task</Link>
      <br />
      <Link to={`/todos`}>Back to Todo List</Link>
    </div>
  );
};

export default SingleTodo;
