import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addExpToPet, fetchSinglePetAsync, selectSinglePet } from "./petSlice";

import styles from "../styles/PetProfile.module.css"

const PetProfile = () => {
  const dispatch = useDispatch();
  const petId = useParams();
  const [exp, setExp] = useState("")

  const singlePet = useSelector(selectSinglePet);

  useEffect(() => {
    dispatch(fetchSinglePetAsync(petId.id));
  }, [dispatch]);
  
  function addExp(petId, experience) {
    dispatch(addExpToPet({id: petId.id, experience}, 
      [dispatch]))
  }

  const {
    id,
    name,
    image,
    age,
    species,
    experience,
    user,
  } = singlePet;

  return (
    <div className={styles.PetProfile}>
    <section id="petProfile">
      <div key={id}>
        <img className="profilePet" src={image} />
        <h2 className="petName">{name}</h2>
        <h3>Age:</h3> 
        <h4>{age}</h4>
        <h3>Species:</h3>
        <h4>{species}</h4>
        <h3>Owner:</h3>
        <h4>{user?.username}</h4>
        <p>EXP: {experience}</p>
        <button onClick={() => addExp(id, experience)}>Add EXP</button>
        {/* ^^Need to implement a bar that shows how close to the next level^^  */}
      </div>
    </section>
    </div>
  );
};

export default PetProfile;