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
<<<<<<< HEAD
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
                       
       
=======
            <Link to="/addNewTodo">Add a new task</Link>
            {todos ? (
            todos.map((todo) => {
                return <TodoCard key={todo.id} todo={todo} />;
        })) : (
        <p>Loading</p>)}
>>>>>>> 6d4abde6ce743a6c24bb7dd1664b2f71c558ac1a
        </div>
    )
};
export default Todos;