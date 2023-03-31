import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editSingleUser } from "./singleUserSlice";

import styles from "../styles/EditUser.module.css";

//Component to edit User's profile
const EditUser = () => {
  const { me } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  //Will need to figure out how to make editing profilePic work, may not need line below
  const [profilePic, setProfilePic] = useState(null);
  const [pronouns, setPronouns] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleProfilePicChange = (evt) => {
  const file = evt.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
  } else {
    setProfilePic(null);
  }
};
  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      editSingleUser({
        id: me.id,
        displayName,
        username,
        pronouns,
        profilePic,
        aboutMe,
      })
    );
    setProfilePic(null);
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
        <br />

        <label>
          New Username:
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />

        <label>
          Update Pronouns:
          <input
            type="text"
            name="pronouns"
            onChange={(event) => setPronouns(event.target.value)}
          />
        </label>
        <br />

        <label>
          Update About Me:
          <input
            type="text"
            name="aboutMe"
            onChange={(event) => setAboutMe(event.target.value)}
          />
        </label>
        <br />

        <label>
          Change Profile Picture
      
          <input
            name="profilePic"
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
        </label>
        <br></br>
        <br/>
        <button type="submit">Submit Changes</button> 
        <button onClick={() => navigate("/users/:id")}>Cancel</button>
      </form>
    </div>
  );
};
export default EditUser;
