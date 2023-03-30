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
      {isLoggedIn ? (
        <Link to="/" onClick={logoutAndRedirectHome}><b>
          Logout
        </b></Link>
      ) : (
        <div className="login-logout">
          <Link to="/login" className={styles.Link}><b>
            Log In
          </b></Link>
          <Link to="/signup" className={styles.Link}><b>
            Sign Up
          </b></Link>
        </div>
      )}
      {isLoggedIn && (
        <div className="login-logout">
          <Link to={`/users/${userId}`}><b>Account</b></Link>
          <Link to="/todos" className={styles.Link}><b>
            Todos
          </b></Link>
        </div>
      )}
      <Link to="/home" className={styles.link}><b>
        Home
      </b></Link>
      
      <h1>TodoMagotchi<img src="/LogoCreatureMelonWhite.png"></img></h1>
      <hr />
    </nav>
  );
};

export default Navbar;
