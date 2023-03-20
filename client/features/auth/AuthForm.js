import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/home')
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (displayName === "Sign Up") {
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      const displayName = evt.target.displayName.value;
      const pronouns = evt.target.pronouns.value;
      const profilePic = evt.target.profilePic.files[0];
      const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : 'pfp.png'; // create URL for the image file
      dispatch(
        authenticate({
          username,
          password,
          email,
          displayName,
          pronouns,
          method: formName,
          profilePic: profilePicUrl, // pass the URL to the authenticate action
        })
      );
      navigate("/pets");
  
    } if (displayName === "Login") {
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate({ username, password, method: formName }))
    }
  };

  if (displayName === "Login") {
    return (
      <div className="login">
        <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit" onSubmit={redirect}>{displayName}</button>
          </div>
        {error && <div> {error} </div>}
      </form>
    </div>
    )
  }

  if (displayName === "Sign Up") {
    return (
      <main id="signup" className="container">
        <form className="form" onSubmit={handleSubmit} name={name}>
          <div className="form-group">
            <label htmlFor="displayName" className="form-label">
              Display Name
            </label>
            <input name="displayName" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="pronouns" className="form-label">
              pronouns
            </label>
            <input name="pronouns" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input name="email" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input name="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input name="password" type="password" className="form-control" />
          </div>
          <div>
          <label htmlFor="profilePic" className="form-label">
            <small>Profile Picture</small>
          </label>
          <input name="profilePic" type="file" accept="image/*" />
          </div>
          <button className="btn primary-btn" type="submit">
            {displayName}
          </button>

          {error && <div className="error"> {error} </div>}
        </form>
      </main>
    );
  }
};

export default AuthForm;
