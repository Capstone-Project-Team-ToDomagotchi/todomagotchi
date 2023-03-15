import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const profilePic = useSelector((state) => state.auth.me.profilePic);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <div>{profilePic}</div>
    </div>
  );
};

export default Home;