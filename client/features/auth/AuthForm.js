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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (displayName === "Sign Up") {
      const formName = evt.target.name;
      const userName = evt.target.userName.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      const displayName = evt.target.displayName.value;
      const pronouns = evt.target.pronouns.value;
      const formData = new FormData();
      formData.append('profilePic', evt.target.profilePic.files[0]);
      dispatch(
        authenticate({
          userName,
          password,
          email,
          displayName,
          pronouns,
          method: formName,
          profilePic: formData.get('profilePic'),
        })
      );

      navigate("/landing");
    }
  };

  if (displayName === "Sign Up") {
    return (
      <main id="signup" className="container flex-column">
        <form className="flex-column gap-1" onSubmit={handleSubmit} name={name}>
            <label htmlFor="displayName">
              <small>Display Name</small>
            </label>
            <input name="displayName" type="text" />
            <label htmlFor="pronouns">
              <small>Pronouns</small>
            </label>
            <input name="pronouns" type="text" />
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
            <label htmlFor="userName">
              <small>Username</small>
            </label>
            <input name="userName" type="text" />
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
            <label htmlFor="profilePic">
              <small>Profile Picture</small>
            </label>
            <input name="profilePic" type="file" accept="image/*" />
            <button className="btn primary-btn" type="submit">{displayName}</button>
          {error && <div> {error} </div>}
        </form>
      </main>
    );
  }
};

export default AuthForm;

