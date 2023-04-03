import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/FriendsDisplay.module.css";

//Component to display friends list on user's profile page
const FriendsDisplay = ({ users }) => {
        if (!users) {
            return <div>No friends yet</div>
        }
        const selectedUsers = useMemo(() => {
            const randomIndexes = new Set();
            while (randomIndexes.size < 4 && randomIndexes.size < users.length) {
                randomIndexes.add(Math.floor(Math.random() * users.length));
            }
            return Array.from(randomIndexes).map((index) => users[index]);
        }, [users]);

        return (
            <ul className={styles.friendsDisplay}>
                {selectedUsers.map((user) => {
                    return (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            <img src="https://cdn.pixabay.com/photo/2021/02/13/19/00/happy-6012501_1280.png" />
                            <p>{user.username}</p>
                            </Link>
                        </li>
                )})}
            </ul>
        )
    }
export default FriendsDisplay;
