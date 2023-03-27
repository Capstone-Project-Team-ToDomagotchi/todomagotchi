import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAsync } from "./userSlice";
import FriendsDisplay from "./FriendsDisplay"

const FriendsSnapshot = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsersAsync())
    }, [dispatch])

    return (
        <div className="FriendsSnapshot"> 
        <h1>Friends</h1>
        <FriendsDisplay users={users} />
        </div>
    )
};
export default FriendsSnapshot;