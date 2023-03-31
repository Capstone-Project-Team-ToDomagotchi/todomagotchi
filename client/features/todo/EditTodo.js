import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  selectSingleTodo,
  editSingleTodo,
} from "./singleTodoSlice";

import styles from "../styles/EditTodo.module.css";

const EditTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [dueDate, setDueDate] = useState("");
  const [todoName, setTodoName] = useState("");
  const [pointType, setPointType] = useState("average");
  const [description, setDescription] = useState("");

  let singleTodo = useSelector(selectSingleTodo);
  useEffect(() => {
    setDueDate(singleTodo.dueDate);
    setTodoName(singleTodo.todoName);
    setPointType(singleTodo.pointType);
    setDescription(singleTodo.description);
  }, [singleTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editSingleTodo({ id, dueDate, todoName, pointType, description }));
    navigate(-1);
  };

  return (
    <div className={styles.editTodo}>
      <form id="edit-task-form" onSubmit={handleSubmit}>
        <h3>Edit Your Task</h3>
        <label htmlFor="todoName">Task:</label>
        <input
          name="todoName"
          id="todoName"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />

        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label htmlFor="pointType">Priority</label>
        <select
          id="pointType"
          name="pointType"
          onChange={(e) => {
            setPointType(e.target.value);
          }}
        >
          <option value="average">average</option>
          <option value="important">important</option>
        </select>

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br></br>
        <button type="submit" name="submit" id="submit">
          Submit
        </button>
        <Link to="/todos">Cancel</Link>
      </form>
    </div>
  );
};
export default EditTodo;
