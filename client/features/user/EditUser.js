import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editSingleUser } from "./singleUserSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faUser, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faDisplay, faCamera } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/EditUser.module.css";

//Component to edit User's profile
const EditUser = () => {
  const { me } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [pronouns, setPronouns] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  // Event handler to edit profile pic
  const handleProfilePicChange = (evt) => {
  const file = evt.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePic(reader.result);

    //Max image file size for upload is 50 KB, so window alert added
      if (file.size > 50000){
        window.alert("Sorry! Profile picture file size is too large. Please upload a file smaller than 50 KB.");
        }
    };
  } else {
    setProfilePic(null);
  }
};

//Event handler to edit user profile info
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
    //Edit user form begins here
    <div className={styles.editUser}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Information</h1>
        <hr />

        <FontAwesomeIcon icon={faDisplay} />
        <label>
          New Display Name: 
          <br/>
          <input
            type="text"
            name="displayName"
            placeholder="Display name"
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </label>
        <br />

        <FontAwesomeIcon icon={faUser} />
        <label>
          New Username: 
          <br/>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />

        <FontAwesomeIcon icon={faCircleUser} />
        <label>
          Update Pronouns: 
          <br/>
          <input
            type="text"
            name="pronouns"
            placeholder="Pronouns"
            onChange={(event) => setPronouns(event.target.value)}
          />
        </label>
        <br />

        <FontAwesomeIcon icon={faSmile} />
        <label>
          Update About Me: 
          <br/>
          <input
            type="text"
            name="aboutMe"
            placeholder="About me"
            onChange={(event) => setAboutMe(event.target.value)}
          />
        </label>
        <br />

        <FontAwesomeIcon icon={faCamera} />
        <label>
          Change Profile Picture: 
          <br/>
          <input
            id="fileUpload"
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
