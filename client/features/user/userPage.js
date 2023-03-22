import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";

//This component is unfinished, still need to add details and make sure it works
const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const {
    displayName,
    username,
    profilePic,
    pronouns,
    petId,
    selectPets,
    todos,
    aboutMe,
  } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <div>
      <div className="user-profile">
        <div>
          <header id="user-header">
            <img id="user-img" src={profilePic}></img>
            <div>
              <h2>Name: {displayName}</h2>
              <h3>Username: {username} </h3>
              <p>Pronouns: {pronouns}</p>
              {aboutMe && <p>About Me: {aboutMe} </p>}
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
        {selectPets && selectPets.length ? (
          selectPets.map((selectPet) => (
            <div className="petList" key={selectPets.petId}>
              <Link to={`/pets/${selectPets.petId}`}>
                Name: {selectPet.name}
              </Link>
              <br />
              {selectPet.image}
              <br />
              <p>Experience Points: {selectPet.experience}</p>
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
