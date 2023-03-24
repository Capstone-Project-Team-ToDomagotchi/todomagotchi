import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";
import TodosSnapshot from "./TodosSnapshot";
import PetSnapshot from "./PetSnapshot";

import styles from  "../styles/Users.module.css"

//Component to view User's profile
const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { displayName, username, profilePic, pronouns, aboutMe } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);

  const currentUser = useSelector((state) => state.auth.me);

  return (
      <div className={styles.userProfile}>
          <header id="user-header">
            <img id="user-img" src={profilePic}></img>
            <div>
              <h2>Name: {displayName}</h2>
              <h3>Username: {username} </h3>
              <p>Pronouns: {pronouns}</p>
              {aboutMe && <p>About Me: {aboutMe} </p>}
              <br />
              {(currentUser.id === singleUser.id) &&
              <Link to={`/users/${id}/edit`}>Edit Profile</Link>}
            </div>
          </header>
      </div>
  );
};

export default User;
