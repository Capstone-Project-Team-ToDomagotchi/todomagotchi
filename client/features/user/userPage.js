import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";

import styles from  "../styles/Users.module.css"

//This component is unfinished, still need to add details and make sure it works
const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { displayName, username, profilePic, pronouns, pets, selectPet, todos } =
    singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.user-profile}>
        <div>
          <header id="user-header">
            <img id="user-img" src={profilePic}></img>
            <div>
              <h2>Name: {displayName}</h2>
              <h3>Username: {username} </h3>
              <p>Pronouns: {pronouns}</p>
              <form id="aboutMe-Form">
                <label htmlFor="displayName">
                  <small>About Me</small>
                </label>
                <input name="aboutMe" type="text" />
              </form>
              <br />
              <Link to={`/users/${id}/edit`}>Edit Profile</Link>
            </div>
          </header>
        </div>
      </div>
      <div className="todo-details">
        <p>List of Todos:</p>
        {todos && todos.length ? (
          todos.map((todo) => (
            <div className="todoList" key={todo.id}>
              <Link to={`/todos/${todo.id}`}>Name: {todo.toDoName}</Link>
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
      <div className="pet-details">
        <p>List of Pets:</p>
       
        {pets && pets.length ? (
          pets.map((pet) => (
            <div className="petList" key={petId}>
              <Link to={`/pets/${pet.id}`}>Name: {pet.name}</Link>
              <br />
              {pet.image}
              <br />
              <p>Experience Points: {pet.experience}</p>
            </div>
          ))
        ) : (
          <p>
            <i>No pets exist for this user</i>
          </p>
        )}
      </div>
      <div id="todos-remaining">{/* {todos.id} */}</div>
    </div>
  );
};

export default User;
