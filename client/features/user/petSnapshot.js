import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./singleUserSlice";
import { selectSelectedPet, fetchSelectPetAsync } from "../pet/selectPetSlice";

const PetSnapshot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const petId = useParams();

  const singleUser = useSelector(selectSingleUser);
  const singlePet = useSelector(selectSelectedPet);

  const { selectPets } = singleUser;
  const { selectImg } = singlePet;

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchSelectPetAsync(petId));
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
               <img
                 className="profilePet"
                 src={singlePet.pet?.image?.[selectImg]}
               />
               <p>Age: {pet.age}</p>
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
