import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";

const CreateNewTodo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate;

    const handleSubmit = (event) => {
        event.preventDefault();
        const dueDate = event.target.dueDate.value;
        const toDoName = event.target.toDoName.value;
        const pointType = event.target.pointType.value;
        const description = event.target.description.value;
        const isCompleted = event.target.isCompleted.value

        dispatch(dueDate, toDoName, pointType, description, isCompleted);
        navigate(`/todos/${id}`)
    }


    return (
        <div className="add-todo">
            <form onSubmit={handleSubmit}>
                <h3>Add A New Task</h3>
                <label htmlFor="toDoName">New Task:</label>
                <input type="text" name="toDoName" />
                <label htmlFor="dueDate">New Username:</label>
                <input type="date" id="dueDate" name="dueDate" />
                <label htmlFor="pointType">Priority</label>
                <select id="pointType" name="pointType">
                    <option value="high">High</option>
                    <option value="regular">Regular</option>
                    </select>
                <label htmlFor="description">Description: </label>
                <input type="checkbox" name="description" />
                <br></br>
                <button type='submit'>Submit Changes</button>
                <Link to='/users/:id'>Cancel</Link>
            </form>
        </div>
    )

};
export default CreateNewTodo;
