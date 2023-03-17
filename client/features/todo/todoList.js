import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
            {todos ? (
            todos.map((todo) => {
                return <TodoCard key={todo.id} todo={todo} />;
        })) : (
        <p>Loading</p>)}
        </div>
    )
};
export default Todos;