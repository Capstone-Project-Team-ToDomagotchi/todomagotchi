import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome!</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The mainpage will show these elements only after you've signed in */}
            <Link to="/pet">Home</Link>
            
          </div>
        ) : (
          <div>
            {/* The mainpage will show these elements only before you've signed in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default MainPage;
