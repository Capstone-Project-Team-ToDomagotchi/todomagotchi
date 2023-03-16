import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const profilePic = useSelector((state) => state.auth.me.profilePic);
  // const profilePic = useSelector((state) => state.auth.me.profilePic);

  return (
    <div>
      <h3>Welcome, {userName}</h3>
      <img src={profilePic} alt="Profile Picture" />
 
    </div>
  );
};

export default Home;
