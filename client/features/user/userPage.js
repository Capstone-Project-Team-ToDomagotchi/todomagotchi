import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./singleUserSlice";
import FriendsSnapshot from "./FriendsSnapshot";

import styles from  "../styles/Users.module.css"

//Component to view User's profile
const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { displayName, username, profilePic, pronouns, aboutMe } = singleUser || {};

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleUser(id));
    };
    fetchData();
  }, [dispatch, id]);

  const currentUser = useSelector((state) => state.auth.me);

  return (
      <div className={styles.userProfile}>
          <header id="user-header">
            <img id="user-img" src={profilePic}></img>
            <div>
              {displayName && <h2>Name: {displayName}</h2>}
              {username && <h3>Username: {username} </h3>}
              {pronouns && <p>Pronouns: {pronouns}</p>}
              {aboutMe && <p>About Me: {aboutMe} </p>}
              <br />
              {(currentUser.id === singleUser.id) &&
              <button onClick={() => navigate(`/users/${id}/edit`)}><b>Edit Profile</b></button>}
            </div>
          </header>
          <hr />
          <FriendsSnapshot />
      </div>
  );
};

export default User;
