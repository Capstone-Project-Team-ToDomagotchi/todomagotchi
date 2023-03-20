import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";


const CreateNewTodo = () => {
    const [dueDate, setDueDate] = useState("");
    const [toDoName, setToDoName] = useState("");
    const [pointType, setPointType] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "/addNewTodo",
            payload: {dueDate, toDoName, pointType, description}});
        setDueDate("");
        setToDoName("");
        setPointType("");
        setDescription("");
        navigate(`/todos`)
    }


    return (
        <div className="add-todo">
            <form id="new-task-form" onSubmit={handleSubmit}>
                <h3>Add A New Task</h3>
                <label htmlFor="toDoName">New Task:</label>
                <input name="toDoName" value={toDoName}
                onChange={(e) => setToDoName(e.target.value)}/>

                <label htmlFor="dueDate">Due Date:</label>
                <input type="date" name="dueDate" value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}/>

                <label htmlFor="pointType">Priority</label> 
                <select id="pointType" name="pointType">
                    <option value="high">High</option>
                    <option value="regular">Regular</option>
                    </select>
                    <input type="hidden" value={pointType}
                    onChange={(e) => setPointType(e.target.value)} />

                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={description}
                onChange={(e) => setDescription(e.target.value)}/>
                <br></br>
                <button type='submit'>Submit</button>
                <Link to='/todos'>Cancel</Link>
            </form>
        </div>
    )

};
export default CreateNewTodo;
