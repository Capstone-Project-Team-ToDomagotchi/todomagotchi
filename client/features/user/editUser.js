import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { editSingleUser } from "./userSlice";

import styles from  "../styles/EditUser.module.css"

//Component to edit User's profile
const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  //Will need to figure out how to make editing profilePic work, may not need line below
  // const [profilePic, setProfilePic] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      editSingleUser(
        { id, 
          displayName, 
          username, 
          pronouns, 
          aboutMe }
        )
    );

    setDisplayName("");
    setUsername("");
    setPronouns("");
    setAboutMe("");
    navigate(`/users/${id}`);
  };

  return (
    <div className={styles.editUser}>
      <form onSubmit={handleSubmit}>
        <h3>Edit Information</h3>

        <label>
          New Name:
          <input
            type="text"
            name="displayName"
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </label>
        <br/>

        <label>
          New Username:
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br/>

        <label>
          Update Pronouns:
          <input
            type="text"
            name="pronouns"
            onChange={(event) => setPronouns(event.target.value)}
          />
        </label>
        <br/>

        <label>
          Update About Me:
          <input
            type="text"
            name="aboutMe"
            onChange={(event) => setAboutMe(event.target.value)}
          />
        </label>
        <br/>

        <label>
          Change Profile Picture
          <input name="profilePic" type="file" accept="image/*" />
        </label>
        <br></br>

        <button type="submit">Submit Changes</button>
        <Link to="/users/:id">Cancel</Link>
      </form>
    </div>
  );
};
export default EditUser;
