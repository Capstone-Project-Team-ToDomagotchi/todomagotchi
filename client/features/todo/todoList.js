import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTodo, fetchTodosAsync } from "./todoSlice";
import TodoCard from "./todoCard";

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodo);

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, [dispatch])

    return (
        <div className="todo-container">
            <Link to="/addNewTodo">Add a new task</Link>
            {todos ? (
            todos.map((todo) => {
                return <TodoCard key={todo.id} todo={todo} />;
        })) : (
        <p>Loading</p>)}
        </div>
    )
};
export default Todos;