import React from "react";

import styles from "../styles/LoggedOut.module.css"

const LoggedOut = () => {
  return (
    <main className={styles.loggedOut}>
        {/* Choose a pet section */}
        <section className={styles.petChoice}>
          <h3>Choose a pet!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              corrupti ipsam modi at neque itaque, blanditiis fuga eligendi!
              Porro, totam!
            </p>
            <div>
              <span>
                <p>Animal</p>
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
          <h3>Make your pet grow with productivity!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              corrupti ipsam modi at neque itaque, blanditiis fuga eligendi!
              Porro, totam!
            </p>
            <div>
              <span>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            </span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              corrupti ipsam modi at neque itaque, blanditiis fuga eligendi!
              Porro, totam!
            </p>
        </section>
        {/* Home pic on home page section */}
        <section className={styles.image}>
          <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
        </section>
    </main>
  );
};

export default LoggedOut;
