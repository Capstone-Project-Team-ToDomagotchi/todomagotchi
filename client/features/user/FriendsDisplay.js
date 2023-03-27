import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {FriendsSnapshot} from "./FriendsSnapshot";
import { fetchUsersAsync, selectUsers } from "./userSlice";

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
            <div className="friendsDisplay">
                {selectedUsers.map((user) => (
                    <div key={user.id}>
                        <Link to={`/user/${user.id}`}>
                            <img src={user.profilePic} />
                            <h3>{user.displayName}</h3>
                        </Link>
                        </div>
                ))}
            </div>
        )
    }
export default FriendsDisplay;
