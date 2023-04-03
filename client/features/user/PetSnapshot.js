import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectSingleUser, fetchSingleUser } from "./singleUserSlice";

import styles from "../styles/PetSnapshot.module.css";

//Component to display a few details about a user's pet(s)
const PetSnapshot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { selectPets } = singleUser;

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleUser(id));
    }
  }, [dispatch, id]);

  return (
    <main className="pet-details">
      <section className={styles.petContainer}>
        <h2 className={styles.homeHeader}>Pets</h2>
        {selectPets && selectPets.length ? (
          selectPets.map((pet) => (
            <div className={styles.petList} key={pet.id}>
              <img
                className={styles.homePetPic}
                src={pet.pet.image?.[pet.selectImg]}
              />
              <Link to={`/pets/${pet.id}`}>
                <h3>Name: {pet.name}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>
            <i>No pets exist for this user</i>
            <br />
            <br />
            <Link to={`/pets`}>Add a Pet</Link>
          </p>
        )}
      </section>
    </main>
  );
};

export default PetSnapshot;
