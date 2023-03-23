import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addExpToPet, fetchSinglePetAsync, selectSinglePet } from "./petSlice";

import styles from "../styles/PetProfile.module.css";

const PetProfile = () => {
  const dispatch = useDispatch();
  const petId = useParams();
  const [img, setImg] = useState("");

  const singlePet = useSelector(selectSinglePet);

  useEffect(() => {
    dispatch(fetchSinglePetAsync(petId.id));
  }, [dispatch]);

  const addExp = async (id) => {
    await dispatch(addExpToPet(id));
  };

  const { id, name, age, exp, user } = singlePet;
  const { species, image } = singlePet.pet;

  console.log("a picture", image);

  console.log(petId.id);

  let i = 0;

  // function checkExp(exp) {
  //   if (exp < 40) {
  //     i = 0;
  //   }
  //   if (exp < 60) {
  //     i = 1;
  //   }
  //   if (exp > 90) {
  //     i = 2;
  //   }
  // }

  console.log("current img:", img);

  return (
    <div className={styles.PetProfile}>
      <section id="petProfile">
        <div key={id}>
          <img
            className="profilePet"
            src={image
              // ?.[checkExp(exp)]
            }
          />
          <h2 className="petName">{name}</h2>
          <h3>Age:</h3>
          <h4>{age}</h4>
          <h3>Species:</h3>
          <h4>{species}</h4>
          <h3>Owner:</h3>
          <h4>{user?.username}</h4>
          <p>EXP: {exp}</p>
          <button onClick={(id) => addExp(id)}>Add EXP</button>
          {/* ^^Need to implement a bar that shows how close to the next level^^*/}
        </div>
      </section>
    </div>
  );
};

export default PetProfile;
