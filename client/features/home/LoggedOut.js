import React from "react";

import styles from "../styles/LoggedOut.module.css";

const LoggedOut = () => {
  return (
    <main className={styles.loggedOut}>
      {/* Choose a pet section */}
      <section className={styles.petChoice}>
        <div>
          <h3>Choose a pet</h3>
          <p>
            Choose a pet to care for and watch it grow the more tasks you complete! When you first start out, you can select from two pet categories, plants or monsters, and watch as your baby pet is unveiled right before your eyes.
          </p>
          <span>
            <p>Monster</p>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
          </span>
          <span>
            <p>Plant</p>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
          </span>
        </div>
      </section>
      {/* Make your pet grow with productivity section */}
      <section className={styles.productivity}>
        <h3>Make your pet grow with productivity</h3>
        <p>
          For each task you complete, your pet will gain experience points and grow to new stages and forms. But be careful! If you neglect to finish a task before the deadline you set, your pet loses experience points. Be sure to log on every day to ensure your pet stays healthy!
        </p>
        <div>
          <span>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
          </span>
        </div>
      </section> 
      {/* Home pic of lady with the pets on home page section. It's meant to be a larger picture that will take up the right panel (so there won't be as much white space as there is now) */}
      <section className={styles.image}>
      <h3>Sign up today!</h3>
      <p>
      Make checking off todos more fun by caring for your very own ToDomagotchi pets!
      </p>
        <div>
          <span>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
          </span>
        </div>
      </section>
    </main>
  );
};

export default LoggedOut;
