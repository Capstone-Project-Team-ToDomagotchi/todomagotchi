import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPets, fetchAllPetsAsync } from "../pet/allPetsSlice";
import { useNavigate, useParams} from "react-router-dom";

const AllPets = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const {id} = useParams();

    const allPets = useSelector(selectAllPets);
    useEffect(() => {
      dispatch(fetchAllPetsAsync());
    }, [dispatch]);
    console.log(allPets)

    return (
        <div id="petlist">
        {allPets && allPets.length
          ? allPets.map((pet) => (
              <Link
                to={`/pets/${pet.id}`}
                key={`All Pets: ${pet.id}`}
              >
                <div className="pet-row">
                   <p>{pet.name}</p>
                   <img src={`${pet.image}`} />
                   <div className="select-button">
                    <button onClick={(event) => handleSelect(pet.id, event)}>Select</button>
                  </div>
                
                </div>
              </Link>
            ))
          : null}
         
      </div>
    );
    
}
export default AllPets;