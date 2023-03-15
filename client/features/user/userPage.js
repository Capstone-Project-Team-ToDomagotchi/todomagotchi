import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleUser, fetchSingleUser } from "UserSlice.js"
import { selectSingleUser } from './UserSlice';

//This component is unfinished, still need to add details and make sure it works 
const User = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const singleUser = useSelector(selectSingleUser);
  const { displayName, profilePic, pronouns } = singleUser;

  useEffect(() => {
    dispatchEvent(fetchSingleUser(userId));
  }, [dispatch]);

  return (
    <div>
      <div id="user-profile">
          <div>
            <header id="user-header">
              <img
                id="user-img"
                src={profilePic}
              ></img>
              <div>
                <h2>Name: {displayName}</h2>
                  <p>Pronouns: {pronouns}</p>
              </div>
            </header>

            <div id="pet-details">
                Pet: {pet.name}
                <img id="pet-img">
                    {pet.image}
                </img>
                Points: {pet.experience}
            </div>

            <div id="todos-left">
                {/* {todos} */}
            </div>
          </div>
     </div>
     </div>
     )
  };

export default User;