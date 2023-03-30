import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

  
  const { id, name, createdAt, age, exp, user, selectImg } = singlePet;

  return (
    <div className={styles.PetProfile}>
      <section id="petProfile">
        <div key={id}>
          <section className={styles.leftProfile}>
            <img
              className={styles.profilePetImg}
              src={singlePet.pet?.image?.[selectImg]}
            />
            <h3 className={styles.profileHeader}>EXP: {exp}</h3>
          </section>
          <section className={styles.rightProfile}>
            <h2 className={styles.petName}>{name}</h2>
            <h3 className={styles.profileHeader}>Age:</h3>
            <h4>{age}</h4>
            <h3 className={styles.profileHeader}>Species:</h3>
            <h4>{singlePet.pet?.species}</h4>
            <h3 className={styles.profileHeader}>Owner:</h3>
            <Link to={`/users/${user?.id}`}>
              <h4>{user?.username}</h4>
            </Link>
          </section>
          {/* ^^Need to implement a bar that shows how close to the next level^^*/}
        </div>
      </section>
    </div>
  );
};

export default PetProfile;
