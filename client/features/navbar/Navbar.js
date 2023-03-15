import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { authenticate } from "../../app/store";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = "login";
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };
  
  useEffect(() => {
    if (
      user.me.userType === "ADMIN" &&
      !window.localStorage.getItem("userPath")
    ) {
      navigate("/admin/login");
    }
  }, [user]);

  return (
    <div>
      <h1>ToDomagotchi</h1>
      <nav>
      {isLoggedIn ? (
                <div className="login-logout">
                  <Link to="/">Home</Link>
                  <Link to={`/account`}>Profile</Link>
                  <button className="btn secondary-btn" type="button" onClick={logoutAndRedirectHome}>
                    Logout
                  </button>
                </div>
              ) : (
                  <div className="login-logout">
                    <div>
                      Login
                    </div>
                    <div>
                      <form className="gap-1" id="login-form" onSubmit={handleSubmit}>
                          <label htmlFor="username">
                            <small>Username</small>
                          </label>
                          <input name="username" type="text" />
                          <label htmlFor="password">
                            <small>Password</small>
                          </label>
                          <input name="password" type="password" />
                          <button className="btn primary-btn" type="submit">Log In</button>
                      </form>
                    </div>
                    <Link to="/signup">Sign Up</Link>
                  </div>
                )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;