import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./singleUserSlice";
import FriendsSnapshot from "./FriendsSnapshot";

import styles from "../styles/Users.module.css";

//Component to view user's profile
const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { displayName, username, profilePic, pronouns, aboutMe } =
    singleUser || {};

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleUser(id));
    };
    fetchData();
  }, [dispatch, id]);

  //This selector is used to select the currently logged-in user
  //Used to conditionally render the Edit Profile button
  const currentUser = useSelector((state) => state.auth.me);

  return (
    <main className={styles.userProfile}>
      <header id="user-header">
        <img id="user-img" src={profilePic}></img>
        {displayName && <h2>Name: {displayName}</h2>}
        {username && <h3>Username: {username} </h3>}
        {pronouns && (
          <p>
            <strong>Pronouns:</strong> {pronouns}
          </p>
        )}
        {aboutMe && (
          <p>
            <strong>About Me:</strong> {aboutMe}{" "}
          </p>
        )}
        <br />
        {/* This conditional allows Edit Profile button to be seen only by logged-in user for their own profile */}
        {currentUser.id === singleUser.id && (
          <button onClick={() => navigate(`/users/${id}/edit`)}>
            Edit Profile
          </button>
        )}
      </header>
      {/* Friends list begins here */}
      <section className="friendsDisplay">
        <FriendsSnapshot />
      </section>
    </main>
  );
};

export default User;
