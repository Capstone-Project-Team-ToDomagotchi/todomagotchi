import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addExpToPet, fetchSinglePetAsync, selectSinglePet } from "./petSlice";

const PetProfile = () => {
  const dispatch = useDispatch();
  const petId = useParams();
  // const [exp, setExp] = useState("")

  const singlePet = useSelector(selectSinglePet);

  useEffect(() => {
    dispatch(fetchSinglePetAsync(petId.id));
  }, [dispatch]);
  
  const addExp = async(id) => {
   await dispatch(addExpToPet(id))}

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
        <button onClick={(id) => addExp(id)}>Add EXP</button>
        {/* ^^Need to implement a bar that shows how close to the next level^^  */}
      </div>
    </section>
  );
};

export default PetProfile;