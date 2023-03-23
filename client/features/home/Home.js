import React from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Home.module.css";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const profilePic = useSelector((state) => state.auth.me.profilePic);

  return (
    <div className={styles.welcome}>
      <h3>Welcome, {username}</h3>
      {/* <img src={profilePic} alt="Profile Picture" /> */}
 
    </div>
  );
};

export default Home;
