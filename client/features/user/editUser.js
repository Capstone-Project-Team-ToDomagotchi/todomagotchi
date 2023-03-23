import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { editSingleUser } from "./userSlice";

import styles from  "../styles/EditUser.module.css"

//Component to edit User's profile
const EditUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [displayName, setDisplayName] = useState("");const [username, setUsername] = useState("");
    //Will need to figure out how to make editing profilePic work, may not need line below
    // const [profilePic, setProfilePic] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [aboutMe, setAboutMe] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      await dispatch(editSingleUser({ id, username, displayName, pronouns, aboutMe }));
      setUsername("");
      setDisplayName("");
    //   setProfilePic("");
      setPronouns("");
      setAboutMe("");
      navigate(`/users/${id}`)
    };

    return (
        <div className={styles.edit-user}>
            <form onSubmit={handleSubmit}>
                <h3>Edit Information</h3>
                <label htmlFor="displayName">New Name:</label>
                <input 
                type="text" 
                name="displayName"
                onChange={(event) => setDisplayName(event.target.value)} />

                <label htmlFor="username">New Username:</label>
                <input 
                type="text" 
                name="username"
                onChange={(event) => setUsername(event.target.value)} />

                <label htmlFor="pronouns">Update Pronouns:</label>
                <input 
                type="text" 
                name="pronouns"
                onChange={(event) => setPronouns(event.target.value)} />

                <label htmlFor="aboutMe">Update About Me:</label>
                <input 
                type="text" 
                name="aboutMe"
                onChange={(event) => setAboutMe(event.target.value)} />

                <label htmlFor="profilePic">Change Profile Picture</label>
                <input 
                name="profilePic" 
                type="file" 
                accept="image/*" />
                <br></br>

                <button type='submit'>Submit Changes</button>
                <Link to='/users/:id'>Cancel</Link>
            </form>
        </div>
    )

};
export default EditUser;