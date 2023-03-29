import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.navbar}>
      {isLoggedIn && (
        <div className="login-logout">
          <Link to={`/users/${userId}`}>Account</Link>
          <Link to="/todos" className={styles.Link}>
            Todos
          </Link>
        </div>
      )}
      {isLoggedIn ? (
        <Link to="/" onClick={logoutAndRedirectHome}>
          Logout
        </Link>
      ) : (
        <div className="login-logout">
          <Link to="/login" className={styles.Link}>
            Log In
          </Link>
          <Link to="/signup" className={styles.Link}>
            Sign Up
          </Link>
        </div>
      )}
      <Link to="/home" className={styles.link}>
        Home
      </Link>
      <h1>TodoMagotchi
        <img src="LogoCreature.png"></img>
      </h1>
      <hr />
    </nav>
  );
};

export default Navbar;
