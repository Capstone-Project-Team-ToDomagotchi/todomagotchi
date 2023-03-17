import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const profilePic = useSelector((state) => state.auth.me.profilePic);
  // const profilePic = useSelector((state) => state.auth.me.profilePic);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <img src={profilePic} alt="Profile Picture" />
      <div>
        <h1>Welcome to ToDomagotchi!</h1>
      </div>
    </div>
  );
};

export default Home;
