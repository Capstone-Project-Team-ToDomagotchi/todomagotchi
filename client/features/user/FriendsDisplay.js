import React, { useMemo } from "react";
import { Link } from "react-router-dom";

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
                {selectedUsers.map((user) => {
                    console.log(user);
                    return (
                    <div key={user.id}>
                        <Link to={`/user/${user.id}`}>
                            <img src={user.profilePic} />
                            <p>{user.username}</p>
                            </Link>
                        </div>
                )})}
            </div>
        )
    }
export default FriendsDisplay;
