import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";
import styles from  "../styles/Users.module.css"

//Component to view User's profile
const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const {
    displayName,

    username,

    profilePic,

    pronouns,

    pets,

    selectPets,

    todos,
    aboutMe,
  } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.userProfile}>
        <div>
          <header id="user-header">
            <img id="user-img" src={profilePic}></img>
            <div>
              <h2>Name: {displayName}</h2>
              <h3>Username: {username} </h3>
              <p>Pronouns: {pronouns}</p>
              {aboutMe && <p>About Me: {aboutMe} </p>}
              <br />
              {/* Need to add way to conditionally render this edit profile link so a user can only edit their own profile */}
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
      <div className="pet-details">
        <p>List of Pets:</p>
        {selectPets && selectPets.length ? (
          selectPets.map((pet) => (
            <div className="petList" key={pet.id}>
              <Link to={`/pets/${pet.id}`}>
                <h3>Name: {pet.name}</h3>
              </Link>

              <p>Age: {pet.age}</p>
              <p>Description: {pet.description}</p>
            </div>
          ))
        ) : (
          <p>
            <i>No pets exist for this user</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default User;
