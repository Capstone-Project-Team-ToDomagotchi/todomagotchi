import React from "react";
import { useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

import styles from "../styles/Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <div className={styles.Home}>
      <nav>
        {isLoggedIn ? (
          <div className={styles.LoggedIn}>
            <LoggedIn />
            </div>
        ) : (
          <div className={styles.LoggedOut}>
            <LoggedOut />
            </div>
          )}
      </nav>
    </div>
  );
};

export default Home;
