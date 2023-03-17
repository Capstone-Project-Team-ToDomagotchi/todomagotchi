import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
// import logo from "../../assets/tdmlogo1.jpg";
// import { authenticate } from "../../app/sto

const Navbar = () => {
  // const user = useSelector((state) => state.auth);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };

  return (
    <div>
      {/* <div>
        <img src="../../assets/tdmlogo1.jpg" alt="logo" />
      </div> */}
      <nav>
        {isLoggedIn ? (
          <div className="login-logout">
            <Link to="/home">Home</Link>
            <Link to="/account">Profile</Link>
            <button
              className="btn secondary-btn"
              type="button"
              onClick={logoutAndRedirectHome}
            >
              Logout
            </button>
          </div>
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
