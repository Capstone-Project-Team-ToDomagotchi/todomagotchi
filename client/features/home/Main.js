import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectSinglePet, fetchPetByUserId } from "../pet/petSlice";
import { selectTodo, fetchTodosAsync } from "../todo/todoSlice";

const MainPage = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const currentUser = useSelector((state) => state.auth.me.id);
  const singlePet = useSelector(selectSinglePet);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(selectTodo);

  console.log(singlePet);

  useEffect(() => {
    dispatch(fetchPetByUserId(currentUser));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const { id, name, image, experience, user } = singlePet;

  return (
    <div>
      <h1>Welcome!</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {user?.username}!</h1>
            {/* The mainpage will show these elements only after you've signed in */}
            <div>
              <img className="profilePet" src={image} />
              <h2 className="petName">{name}</h2>
              <Link to="/pets/:id">Pet Detail</Link>
            </div>
            <div className="todo-container">
              <h2>Current To-Dos:</h2>
              {todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <h3>
                      <Link to={`/todos/${id}`}>To Do: {todo.toDoName}</Link>
                    </h3>
                    <h4>Due Date: {todo.dueDate}</h4>
                    <h5>{todo.isCompleted}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            {/* The mainpage will show these elements only before you've signed in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default MainPage;
