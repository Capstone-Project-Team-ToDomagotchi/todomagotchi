import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPetsAsync } from "../pet/allPetsSlice";
import { useNavigate} from "react-router-dom";
import { fetchPetGalleryAsync } from "./selectPetSlice";

import styles from "../styles/AllPets.module.css";

const AllPets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const allPets = useSelector((state) => state.pets);

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
      dispatch(fetchPetGalleryAsync(selectPet));
    }
    navigate("/users");
  };

  return (
    <div id="petlist" className={styles.petlist}>
      {allPets && allPets.length
        ? allPets.map((pet) => (
            <div key={pet.id}>
              <div>
                <Link to={`/pets/${pet.id}`} key={`All Pets: ${pet.id}`}>
                  <p>{pet.name}</p>{" "}
                </Link>
                <div className={styles.petrow}>
                  <img src={`${pet.image?.[0]}`} />
                  <div className={styles.selectbutton}>
                    <button onClick={select} value={pet.id}>
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default AllPets;
