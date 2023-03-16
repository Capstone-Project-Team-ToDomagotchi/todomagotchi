import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const userName = useSelector((state) => state.auth.me.userName);
  const profilePic = useSelector((state) => state.auth.me.profilePic);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <div>{profilePic}</div>
    </div>
  );
};

export default Home;
