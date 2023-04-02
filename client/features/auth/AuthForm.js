import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faDisplay, faLock, faCamera } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/AuthForm.module.css";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, authMethod }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/home");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (authMethod === "Sign Up") {
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      const displayName = evt.target.displayName.value;
      const pronouns = evt.target.pronouns.value;
      const profilePic = evt.target.profilePic.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        dispatch(
          authenticate({
            username,
            password,
            email,
            displayName,
            pronouns,
            method: formName,
            profilePic: reader.result, // pass the base64-encoded string to the authenticate action
          })
        );
        navigate("/pets");
      };
      if (profilePic) {
        reader.readAsDataURL(profilePic); // read the file contents as a data URL
      } else {
        dispatch(
          authenticate({
            username,
            password,
            email,
            displayName,
            pronouns,
            method: formName,
          })
        );
        navigate("/pets");
      }
    }
    if (authMethod === "Login") {
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate({ username, password, method: formName }));
    }
  };

  if (authMethod === "Login") {
    return (
      <main className={styles.container}>
        <form className={styles.loggedInForm} onSubmit={handleSubmit} name={name}>
        <h1>Log In</h1>
          <hr />
          <span>
          <FontAwesomeIcon icon={faUser} />
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" placeholder="Username"/>
        </span>
        <span>
        <FontAwesomeIcon icon={faLock} />
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" placeholder="Password"/>
        </span>
        <div>
          <button className="login"type="submit" onSubmit={redirect}>{authMethod}</button>
          </div>
        {error && <div> {error} </div>}
      </form>
    </main>
    )
  }

  if (authMethod === "Sign Up") {
    return (
      <main className={styles.container}>
        <form className={styles.signUpForm} onSubmit={handleSubmit} name={name}>
          <h1>Sign Up</h1>
          <hr />
          <section className={styles.displayName}>
            <span className="icon"> 
              <FontAwesomeIcon icon={faDisplay} />
              <label htmlFor="displayName">Display Name</label>
              <input name="displayName" type="text" placeholder="Display name"/></span>
          </section>
          <section className={styles.pronouns}>
            <span className="icon">
              <FontAwesomeIcon icon={faCircleUser} />
              <label htmlFor="pronouns">Pronouns</label>
              <input name="pronouns" type="text" placeholder="Pronouns"/></span>
          </section>
          <section className={styles.email}>
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <label htmlFor="email">Email</label>
              <input name="email" type="text" placeholder="Email"/></span>
          </section>
          <section className={styles.userName}>
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
              <label htmlFor="userName">Username</label>
              <input name="username" type="text" placeholder="Username"/></span>
          </section>
          <section className={styles.password}>
            <span className="icon">
          <FontAwesomeIcon icon={faLock} />
          <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password"/></span>
          </section>
          <section className={styles.profilePicUrl}>
            <span className="icon">
            <FontAwesomeIcon icon={faCamera} />
          <label htmlFor="profilePic">Profile Picture</label>
          <input name="profilePic" type="file" accept="image/*"/></span>
          </section>
          <br />
          <br />
          <button className="submit" type="submit">
            {authMethod}
          </button>
          {error && <div className="error"> {error} </div>}
        </form>
        
      </main>
    );
  }
};

export default AuthForm;
