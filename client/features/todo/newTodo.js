import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import {addNewTodo} from "./todoSlice";

import styles from  "../styles/NewTodo.module.css"


const CreateNewTodo = () => {
    const [dueDate, setDueDate] = useState("");
    const [toDoName, setToDoName] = useState("");
    const [pointType, setPointType] = useState("average");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNewTodo({dueDate, toDoName, pointType, description}));
        setDueDate("");
        setToDoName("");
        setPointType("");
        setDescription("");
        navigate(`/todos`)
    }


    return (
        <div className={styles.add-todo}>
            <form id="new-task-form" onSubmit={handleSubmit}>
                <h3>Add A New Task</h3>
                <label htmlFor="toDoName">New Task:</label>
                <input name="toDoName" id="toDoName" value={toDoName}
                onChange={(e) => setToDoName(e.target.value)}/>

                <label htmlFor="dueDate">Due Date:</label>
                <input type="date" name="dueDate" id="dueDate" value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}/>

                <label htmlFor="pointType">Priority</label> 
                <select id="pointType" name="pointType" 
                onChange={(e) => {
                        setPointType(e.target.value)}}>
                    <option value="average">average</option>
                    <option value="important">important</option>
                    </select>

                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" value={description}
                onChange={(e) => setDescription(e.target.value)}/>
                <br></br>
                <button type='submit'name="submit" id="submit">Submit</button>
                <Link to='/todos'>Cancel</Link>
            </form>
        </div>
    )

};
export default CreateNewTodo;
