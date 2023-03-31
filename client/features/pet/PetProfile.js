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

  const { id, name, createdAt, exp, user, selectImg } = singlePet;
  const convertDate = function (date) {
    const months = [
      "Null",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const stringify = String(date);
    const yearStr = stringify.slice(0, 4);
    const monthStr = stringify.slice(5, 7);
    const dayStr = stringify.slice(8, 10);
    const monthNum = Number(monthStr);
    const selectMonth = months[monthNum];
    return `${selectMonth} ${dayStr}, ${yearStr}`;
  };
  
  const formatDate = convertDate(createdAt);

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
            <h3 className={styles.profileHeader}>Birthdate:</h3>
            <h4>{formatDate}</h4>
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
