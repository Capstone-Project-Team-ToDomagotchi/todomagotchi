import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectSinglePet } from '../pet/petSlice';

const MainPage = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const singlePet = useSelector(selectSinglePet);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(state.auth.me.id)

  // useEffect(() => {
  //   dispatch(fetchSinglePetAsync(petId));
  // }, [dispatch]);

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
