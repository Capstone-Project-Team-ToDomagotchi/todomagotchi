import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPets, fetchAllPetsAsync } from "../pet/allPetsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPetGalleryAsync } from "./selectPetSlice";


const AllPets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.auth);
  const allPets = useSelector((state) => state.pets);
  const selectPet = useSelector((state) => state.selectPet);

  // const allPets = useSelector(selectAllPets);
  useEffect(() => {
    dispatch(fetchAllPetsAsync());
  }, [dispatch]);
  console.log(allPets);

  const select = (event) => {
    const petId = event.target.value;
    const name = window.prompt("Enter a name for your pet:");
    if (name) {
      const selectPet = {
        userId: user.me.id,
        petId,
        name,
      };
      dispatch(fetchPetGalleryAsync(selectPet));
    }
    navigate('/users')
  };

  return (
    <div id="petlist">
      {allPets && allPets.length
        ? allPets.map((pet) => (
            <div key={pet.id}>
              <div>
                <Link to={`/pets/${pet.id}`} key={`All Pets: ${pet.id}`}>
                  <p>{pet.name}</p>{" "}
                </Link>
                <div className="pet-row">
                  <img src={`${pet.image}`} />
                  <div className="select-button">
                    <button onClick={select} value={pet.id}>
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default AllPets;




