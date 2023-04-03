import React from "react";

import styles from "../styles/LoggedOut.module.css";

const LoggedOut = () => {
  return (
    <main className={styles.loggedOut}>
      {/* {Welcome section} */}
        <div className={styles.speechBubble}>
          <p>Welcome to ToDoMagotchi!</p>
        </div>
        <br />
        <div>
          <img
            className={styles.speechBubbleImg}
            src="homepagefigure.png"
          ></img>
        </div>
      {/* Choose a pet section */}
      <section className={styles.petChoice}>
        <div>
          <h3>Choose a pet</h3>
          <p>
            Choose a pet to care for and watch it grow the more tasks you
            complete! When you first start out, you can select from two pet
            categories, plants or monsters, and watch as your baby pet is
            unveiled right before your eyes.
          </p>
          <span>
            <p>Monster</p>
            <img src="/mystery1.png" alt="silhoutted monster" />
          </span>
          <span>
            <p>Plant</p>
            <img src="/mystery2.png" alt="silhoutted plant" />
          </span>
        </div>
      </section>
      {/* Make your pet grow with productivity section */}
      <br />
      <section className={styles.productivity}>
        <h3>Make your pet grow with productivity</h3>
        <p>
          For each task you complete, your pet will gain experience points and
          grow to new stages and forms.
        </p>
        <h3>Sign up today!</h3>
        <p>
          Make checking off todos more fun by caring for your very own
          ToDomagotchi pets!
        </p>
      </section>
      {/* <section className={styles.signUp}>
        <div>
        </div>
            
      </section> */}
    </main>
  );
};

export default LoggedOut;
