import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchPetByUserId,
  selectSinglePet,
  singlePetSlice,
} from "../pet/petSlice";
// import { fetchAllPetsAsync, selectAllPets } from "../pet/allPetsSlice";
import { selectTodo, fetchTodosAsync } from "../todo/todoSlice";
import { fetchSingleUser, selectSingleUser } from "../user/userSlice";

const MainPage = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const currentUser = useSelector((state) => state.auth.me);
  // const pets = useSelector(selectSingleUser);
  const user = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(selectTodo);

  const singleUser = useSelector(selectSingleUser);

  const {
    displayName,
    username,
    profilePic,
    pronouns,
    pets,
    selectPets,
    aboutMe,
  } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(user));
  }, [dispatch]);

  console.log("data:", currentUser)

  // useEffect(() => {
  //   dispatch(fetchSingleUser(user));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  // console.log("data", pets)

  return (
    <div>
      <h1>Welcome!</h1>
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
                    <Link to={`/todos/${todo.id}`}>To Do: {todo.todoName}</Link>
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
          <h1>Welcome to ToDomagotchi!</h1>
          <div>
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
            <div>
              <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default MainPage;
