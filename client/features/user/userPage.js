import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";

//This component is unfinished, still need to add details and make sure it works
const User = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const {
    displayName,
    username,
    profilePic,
    pronouns,
    petId,
    pets,
    todos,
  } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
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
            </div>
          </header>
          <div className="pet-details">
            <p>List of Pets:</p>
            {pets && pets.length
              ? pets.map((pet) => (
                  <div className="petList" key={petId}>
                    <Link to={`/pets/${pet.id}`}>{pet.name} {pet.image} {pet.experience}</Link>
                  </div>
                ))
                : <p><i>No pets exist for this user</i></p>}
          </div>
          <div id="todos-remaining">{/* {todos.id} */}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
