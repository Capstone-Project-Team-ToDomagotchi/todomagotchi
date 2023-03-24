import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { selectTodo, fetchTodosAsync } from "../todo/todoSlice";
import { selectSingleUser, fetchSingleUser } from "../user/userSlice";

import styles from "../styles/Main.module.css";

const Home = () => {
  const username = useSelector((state) => state.auth.me.username);
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
    <div className={styles.Home}>
      <nav>
        {isLoggedIn ? (
          <div>
            <h3>Welcome, {username}</h3>
            {/* The mainpage will show these elements only after you've signed in */}
            {selectPets && selectPets.length ? (
              selectPets.map((pet) => (
                <div className="petList" key={pet.id}>
                  <Link to={`/pets/${pet.id}`}>
                    <h3>Name: {pet.name}</h3>
                  </Link>
                  <img src={`${pet.pet.image}`} />
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
              {todos && todos.length ? (
                todos.map((todo) => (
                  <div className="todoList" key={todo.id}>
                <Link to={`/todos/${todo.id}`}>Name: {todo.todoName}</Link>
                <br />
                {todos.description}
              </div>
                ))
        ) : (
          <div>
            {/* The mainpage will show these elements only before you've signed in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <div>
      <h1>Welcome to ToDomagotchi!</h1>
      <div>
        {/* Choose a pet section */}
        <div>
          <h2>Choose a pet!</h2>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              corrupti ipsam modi at neque itaque, blanditiis fuga eligendi!
              Porro, totam!
            </p>
          </div>
          <div>
            <div>
              <p>Animal</p>
              <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            </div>
            <div>
              <p>Plant</p>
              <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            </div>
          </div>
        </div>
        {/* Make your pet grow with productivity section */}
        <div>
          <h3>Make your pet grow with productivity!</h3>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              corrupti ipsam modi at neque itaque, blanditiis fuga eligendi!
              Porro, totam!
            </p>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              corrupti ipsam modi at neque itaque, blanditiis fuga eligendi!
              Porro, totam!
            </p>
          </div>
        </div>
        {/* Home pic on home page section */}
        <div>
          <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
        </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Home;
