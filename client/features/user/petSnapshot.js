import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./userSlice";

const PetSnapshot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { selectPets } = singleUser;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <div className="pet-details">
      <div>
        <h2>Pets</h2>
        <hr />
        {selectPets && selectPets.length ? (
          selectPets.map((pet) => (
            <div className="petList" key={pet.id}>
              <Link to={`/pets/${pet.id}`}>
                <h3>Name: {pet.name}</h3>
              </Link>
              <p>Age: {pet.age}</p>
              <p>Description: {pet.description}</p>
            </div>
          ))
        ) : (
          <p>
            <i>No pets exist for this user</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default PetSnapshot;
