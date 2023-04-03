import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { selectSingleTodo, fetchSingleTodo } from "./singleTodoSlice";
import styles from "../styles/TodoDetail.module.css";

const SingleTodo = () => {
  const { id } = useParams();
  const singleTodo = useSelector(selectSingleTodo);
  const { todoName, dueDate, description} = singleTodo;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSingleTodo(id));
  }, [dispatch, id]);
  
  return (
    <div className={styles.singleTodoContainer}>
      <h2>{todoName}</h2>
      <p>{dueDate}</p>
      <p>{description}</p>
      <hr></hr>
      <Link to={`/todos/${id}/edit`}>Edit Task</Link>
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default SingleTodo;
