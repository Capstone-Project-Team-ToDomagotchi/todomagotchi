import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPets, fetchAllPetsAsync } from "../pet/allPetsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSelectPetAsync } from "../pet/selectPetSlice";

import styles from "../styles/AllPets.module.css";

const AllPets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.auth);
  const allPets = useSelector((state) => state.pets);
  const selectPet = useSelector((state) => state.selectPet);

  useEffect(() => {
    dispatch(fetchAllPetsAsync());
  }, [dispatch]);

  const select = (event) => {
    const petId = event.target.value;
    const name = window.prompt("Enter a name for your pet:");
    if (name) {
      const selectPet = {
        userId: user.me.id,
        petId,
        name,
      };
      dispatch(fetchSelectPetAsync(selectPet));
    }
    navigate("/users");
  };

  return (
    <ul id="petlist">
      {allPets &&
        allPets.length &&
        allPets.map((pet) => (
          <li key={pet.id}>
            <div className="pet-row" key={`All Pets: ${pet.id}`}>
              <Link to={`/pets/${pet.id}`}>
                <p>{pet.name}</p>
              </Link>
              <img src={`${pet.image}`} />
              <button className="select-button" onClick={select} value={pet.id}>
                Select
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};
export default AllPets;
