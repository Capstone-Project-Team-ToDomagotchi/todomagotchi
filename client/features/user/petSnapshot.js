import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./singleUserSlice";

import styles from "../styles/PetSnapshot.module.css";

const PetSnapshot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { selectPets } = singleUser;

  useEffect(() => {
    if (id){
    dispatch(fetchSingleUser(id));
  }}, [dispatch, id]);

  return (
    <main className="pet-details">
      <section className={styles.petContainer}>
        <h2>Pets</h2>
        {selectPets && selectPets.length ? (
          selectPets.map((pet) => (
            <div className="petList" key={pet.id}>
              {/* vvv image needs to be fixed, temporarily set to 0 by default vvv */}
              <img src={pet.pet.image?.[0]}/>
              <Link to={`/pets/${pet.id}`}>
                <h3>Name: {pet.name}</h3>
              </Link>
              <p>Age: {pet.age}</p>
            </div>
          ))
        ) : (
          <p>
            <i>No pets exist for this user</i>
          </p>
        )}
      </section>
    </main>
  );
};

export default PetSnapshot;