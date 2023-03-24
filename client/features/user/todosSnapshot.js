import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";

const TodosSnapshot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { todos } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <div className="todo-details">
    <h2>Current Todos</h2>
    <hr />
    {todos && todos.length ? (
      todos.map((todo) => (
        <div className="todoList" key={todo.id}>
          <Link to={`/todos/${todo.id}`}>Name: {todo.todoName}</Link>
          <br />
          {todos.description}
          <br />
        </div>
      ))
    ) : (
      <p>
        <i>No todos exist for this user</i>
      </p>
    )}
    </div>
  );
};

export default TodosSnapshot;