import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchPetByUserId,
  selectSinglePet,
  singlePetSlice,
} from "../pet/petSlice";
// import { fetchAllPetsAsync, selectAllPets } from "../pet/allPetsSlice";
import { selectTodo, fetchTodosAsync } from "../todo/todoSlice";
import { selectSingleUser, fetchSingleUser } from "../user/userSlice";

import styles from "../styles/Main.module.css";

const MainPage = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const currentUser = useSelector((state) => state.auth.me);
  const pets = useSelector((state) => state.pet.pet);
  const user = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(selectTodo);
  const { id } = useParams();
  const singleUser = useSelector(selectSingleUser);
  const { selectPets } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(user));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome!</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {currentUser?.username}!</h1>
            {/* The mainpage will show these elements only after you've signed in */}
            {selectPets && selectPets.length ? (
              selectPets.map((pet) => (
                <div className="petList" key={pet.id}>
                  <Link to={`/pets/${pet.id}`}>
                    <h3>Name: {pet.name}</h3>
                  </Link>
                  <img src={`${pet?.image}`} />
                  <p>Age: {pet.age}</p>
                  <p>Description: {pet.description}</p>
                </div>
              ))
            ) : (
              <p>
                <i>No pets exist for this user</i>
              </p>
            )}
            <div className="todo-container">
              <h2>Current To-Dos:</h2>
              {todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <h3>
                      <Link to={`/todos/${todo.id}`}>
                        To Do: {todo.todoName}
                      </Link>
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
