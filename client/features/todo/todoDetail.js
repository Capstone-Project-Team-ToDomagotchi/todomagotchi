import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleTodo, fetchSingleTodo } from "./singleTodoSlice";

const SingleTodo = () => {
    const {id} = useParams();
    const singleTodo = useSelector(selectSingleTodo);
    const { toDoName, dueDate, description, isCompleted} = singleTodo;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleTodo(id))
    }, [dispatch, id]);

    return (
        <div className="singleTodo-container">
            <h2>{toDoName}</h2>
            <p>{dueDate}</p>
            <p>{description}</p>
            {/* update to button, add onClick */}
            <p>{isCompleted}</p>
            <hr></hr>
            <Link to={`/todos/${id}/edit`}>Edit Task</Link>
            <br />
            <Link to={`/todos`}>Back to Todo List</Link>
        </div>
    )
};

export default SingleTodo;