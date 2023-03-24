import React from "react";
import { useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

import styles from "../styles/Main.module.css";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <div className={styles.Home}>
      <nav>
        {isLoggedIn ? (
          <div>
            <LoggedIn />
            </div>
        ) : (
          <div>
            <LoggedOut />
            </div>
          )}
      </nav>
      <hr />
    </div>
  );
};

export default Home;
