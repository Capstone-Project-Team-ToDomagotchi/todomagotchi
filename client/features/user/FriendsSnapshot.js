import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAsync } from "./userSlice";
import FriendsDisplay from "./FriendsDisplay"

import styles from "../styles/FriendsSnapshot.module.css";

const FriendsSnapshot = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsersAsync())
    }, [dispatch])

    return (
        <div className={styles.friendsContainer}> 
        <h1>Friends</h1>
        <section className={styles.friendsList}>
        <FriendsDisplay users={users} />
        </section>
        </div>
    )
};
export default FriendsSnapshot;