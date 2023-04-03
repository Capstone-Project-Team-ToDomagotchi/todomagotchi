import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchSelectPetAsync, selectSelectedPet } from "./selectPetSlice";
import styles from "../styles/PetProfile.module.css";

const PetProfile = () => {
  const dispatch = useDispatch();
  const petId = useParams();

  const singlePet = useSelector(selectSelectedPet);

  useEffect(() => {
    dispatch(fetchSelectPetAsync(petId));
  }, [dispatch]);

  const { id, name, createdAt, exp, user, selectImg } = singlePet;
  //this function changes the display of exp necessary to reach the next level
  const expTilLevel = function () {
    if (selectImg === 0) {
      return 60;
    }
    if (selectImg === 1) {
      return 100;
    }
    if (selectImg === 2) {
      return "Max Level!";
    }
  };

  //this function converts the createdAt data, which was originally only numbers, to display the corresponding month
  const convertDate = function (date) {
    const months = [
      "Null", // set the [0] index as null to avoid system displaying months improperly
      "January", // therefore the month at [1] = January, [2] = February, etc
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
            <h3 className={styles.profileHeader}>
              EXP: {exp} / {expTilLevel(selectImg)}
            </h3>
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
        </div>
      </section>
    </div>
  );
};

export default PetProfile;
