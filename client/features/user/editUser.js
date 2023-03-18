import React from "react";
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate;

    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const displayName = event.target.displayName.value;
        const pronouns = event.target.pronouns.value;
        const profilePic = event.target.profilePic.value;

        dispatch(userName, displayName, pronouns, profilePic);
        navigate(`/users/${id}`)
    }


    return (
        <div className="edit-user">
            <form onSubmit={handleSubmit}>
                <h3>Edit Information</h3>
                <label htmlFor="displayName">New Name:</label>
                <input type="text" name="displayName" />
                <label htmlFor="userName">New Username:</label>
                <input type="text" name="userName" />
                <label htmlFor="pronouns">Update Pronouns:</label>
                <input type="text" name="pronouns" />
                <label htmlFor="profilePic">Change Profile Picture</label>
                <input name="profilePic" type="file" accept="image/*" />
                <br></br>
                <button type='submit'>Submit Changes</button>
                <Link to='/users/:id'>Cancel</Link>
            </form>
        </div>
    )

};
export default EditUser;