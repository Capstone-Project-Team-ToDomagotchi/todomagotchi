import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, fetchTodosAsync } from "./todoSlice";
import { Link } from "react-router-dom";

const Todos = ({}) => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodo);

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, [dispatch])

    return (
        <div className="todo-container">
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                    <h3>
                    <Link to={`/todos/${id}`}>To Do: {todo.toDoName}</Link></h3>
                    <h4>Due Date: {todo.dueDate}</h4>
                    <h5>{todo.isCompleted}</h5>
                    </div>
                )
            })}
                       
       
        </div>
    )
};
export default Todos;