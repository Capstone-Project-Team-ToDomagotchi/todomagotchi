import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { fetchSinglePetAsync, selectSinglePet } from "./petSlice";
import {
  addExpToPet,
  fetchSelectPetAsync,
  selectSelectedPet,
} from "./selectPetSlice";

import styles from "../styles/PetProfile.module.css";

const PetProfile = () => {
  const dispatch = useDispatch();
  const petId = useParams();

  const singlePet = useSelector(selectSelectedPet);

  useEffect(() => {
    dispatch(fetchSelectPetAsync(petId));
  }, [dispatch]);

  const { id, name, age, exp, user, selectImg } = singlePet;

  return (
    <div className={styles.PetProfile}>
      <section id="petProfile">
        <div key={id}>
          <img className="profilePet" src={singlePet.pet?.image?.[selectImg]} />
          <h2 className="petName">{name}</h2>
          <h3>Age:</h3>
          <h4>{age}</h4>
          <h3>Species:</h3>
          <h4>{singlePet.pet?.species}</h4>
          <h3>Owner:</h3>
          <h4>{user?.username}</h4>
          <p>EXP: {exp}</p>
          <button onClick={() => addExp(id, exp)}>Add EXP</button>
          {/* ^^Need to implement a bar that shows how close to the next level^^*/}
        </div>
      </section>
    </div>
  );
};

export default PetProfile;
