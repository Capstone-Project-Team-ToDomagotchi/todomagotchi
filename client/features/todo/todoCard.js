import React from "react";

const TodoCard = ({ todo }) => {
    return (
        <div className="todoCard">
            <h3>To Do: {todo.toDoName}</h3>
            <h4>Due Date: {todo.dueDate}</h4>
            <h5>{todo.isCompleted}</h5>
        </div>
    )
};

export default TodoCard;