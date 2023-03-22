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
    selectPet,
    todos,
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
      <div className="pet-details">
        <p>List of Pets:</p>
        <div>{selectPet}</div>
        {selectPet && selectPet.length ? (
          selectPet.map((select) => (
            <div className="petList" key={select.petId}>
             Name: {select.Pet.name}
              <br />
              {select.Pet.image}
              <br />
              <p>Experience Points: {select.Pet.experience}</p>
            </div>
          ))
        ) : (
          <p>
            <i>No selectPet exist for this user</i>
          </p>
        )}
      </div>
      <div id="todos-remaining">{/* {todos.id} */}</div>
    </div>
  );
};

export default User;
