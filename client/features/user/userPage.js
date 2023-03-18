import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { selectSingleUser, fetchSingleUser } from "./userSlice"
import { Link } from 'react-router-dom';

//This component is unfinished, still need to add details and make sure it works 
const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);
  const { displayName, username, profilePic, pronouns, petId, singlePet } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);

  return (
    <div>
      <div id="user-profile">
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
              <div className="pet-details" key={petId}>
                <p>Pet: {singlePet}</p>
              </div>
        </div>
      </div>
  );
};

export default User;