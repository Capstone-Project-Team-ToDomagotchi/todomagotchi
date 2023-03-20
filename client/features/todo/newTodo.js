import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addSingleTodo } from "./singleTodoSlice";

const CreateNewTodo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const dueDate = event.target.dueDate.value;
        const toDoName = event.target.toDoName.value;
        const pointType = event.target.pointType.value;
        const description = event.target.description.value;

        dispatch({
            type:"todos/addTodo",
            payload:{dueDate, toDoName, pointType, description}});
        navigate(`/todos`)
        // dispatch(addSingleTodo({dueDate,toDoName,pointType,description}));
        // navigate(`/todos`)
    }


    return (
        <div className="add-todo">
            <form onSubmit={handleSubmit}>
                <h3>Add A New Task</h3>
                <label htmlFor="toDoName">New Task:</label>
                <input type="text" name="toDoName" />
                <label htmlFor="dueDate">Due Date:</label>
                <input type="date" id="dueDate" name="dueDate" />
                <label htmlFor="pointType">Priority</label>
                <select id="pointType" name="pointType">
                    <option value="high">High</option>
                    <option value="regular">Regular</option>
                    </select>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" />
                <br></br>
                <button type='submit'>Submit</button>
                <Link to='/todos'>Cancel</Link>
            </form>
        </div>
    )

};
export default CreateNewTodo;
