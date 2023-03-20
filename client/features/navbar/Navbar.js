import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
// import logo from "../../../public/tdmlogo1.jpg";
// import { authenticate } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <div>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <nav>
      <Link to="/home">Home</Link>
      {isLoggedIn && <Link to={`/users/${userId}`}>Account</Link>}
      {isLoggedIn ? (
          <button className="btn secondary-btn" type="button" 
          onClick={logoutAndRedirectHome}>Logout</button>
              ) : (
                  <div className="login-logout">
                    <Link to="/home">Home</Link>
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
