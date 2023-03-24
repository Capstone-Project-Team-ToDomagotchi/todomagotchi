import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

import styles  from "../styles/Navbar.module.css";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };

  return (
    <div className={styles.Navbar}>
      <nav>
      <Link to="/home">Home</Link>
      {isLoggedIn && <Link to={`/users/${userId}`}>Account</Link>}
      {isLoggedIn ? (
          <div>
          <button className="btn secondary-btn" type="button" 
          onClick={logoutAndRedirectHome}>Logout</button>
          </div>    
          ) : (
                  <div className="login-logout">
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                  </div>
                )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
