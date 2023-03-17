import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";

//This component is unfinished, still need to add details and make sure it works
const User = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { displayName, username, profilePic, pronouns, petId, singlePet, todos } = singleUser;

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
          <div className="pet-details" key={petId}>
            <p>Pet: {singlePet}</p>
            {/* <img id="pet-img">{singlePet.image}</img>
            <p>Points: {singlePet.experience}</p> */}
          </div>
          {/* <div id="todos-remaining">
            {todos.id}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default User;
