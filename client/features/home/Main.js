import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchPetByUserId, selectSinglePet, petSlice } from "../pet/petSlice";
// import { fetchAllPetsAsync, selectAllPets } from "../pet/allPetsSlice";
import { selectTodo, fetchTodosAsync } from "../todo/todoSlice";

const MainPage = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const currentUser = useSelector((state) => state.auth.me);
  // const pets = useSelector((state) => (state.singlePetSlice.userId.pets));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(selectTodo);

  // console.log(pets);
  console.log(todos)

  // useEffect(() => {
  //   dispatch(fetchPetByUserId(pets));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  // const { id, name, image, experience, user } = pets;

  return (
    <div>
      <h1>Welcome!</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {currentUser?.username}!</h1>
            {/* The mainpage will show these elements only after you've signed in */}
            {/* {pets.map((pet) => {
              return (
                <div key={pet.id}>
                  <img className="profilePet" src={pet.image} />
                  <h2 className="petName">{pet.name}</h2>
                  <Link to="/pets/:id">Pet Details</Link>
                </div>
              );
            })} */}
            <div className="todo-container">
              <h2>Current To-Dos:</h2>
              {todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <h3>
                      <Link to={`/todos/${todo.id}`}>To Do: {todo.toDoName}</Link>
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
