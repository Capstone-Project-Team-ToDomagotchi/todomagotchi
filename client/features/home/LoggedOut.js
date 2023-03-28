import React from "react";

const LoggedOut = () => {
  return (
    <div>
      <h1>Welcome to ToDomagotchi!</h1>
      <br />
      <p>
        Feel unmotivated or unproductive? Is your usual task app bland to look
        at? Then perhaps To-Domagotchi is for you! With custom illustrations and
        accessible mechanics, To-Domagotchi provides you with a fun, tangible
        way to keep up with your daily tasks while watching your pet grow.
      </p>
      <br/>
      <div>
        {/* Choose a pet section */}
        <div>
          <h3>Choose a pet!</h3>
          <div>
            <p>
              Choose a pet to care for and watch it grow the more tasks you
              complete! When you first start out, you can select a pet category,
              plants or monsters, and watch as your baby pet is unveiled right
              before your eyes.
            </p>
          </div>
          <div>
            <div>
              <p>Animal</p>
              <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            </div>
            <div>
              <p>Plant</p>
              <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            </div>
          </div>
        </div>
        {/* Make your pet grow with productivity section */}
        <div>
          <h3>Make your pet grow with productivity!</h3>
          <div>
            <p>
              For each task you complete, your pet will gain experience points
              and grow to new stages and forms. But be careful! If you neglect
              to finish a task before the deadline you set, your pet loses
              experience points. Be sure to log on every day to ensure your pet
              stays healthy, or if you need a break, turn on Vacation Mode!
            </p>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
            <p>
              Make checking off todos more fun by caring for your very own ToDomagotchi pet. Sign up today!
            </p>
          </div>
        </div>
        {/* Home pic on home page section */}
        <div>
          <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=740&t=st=1679076429~exp=1679077029~hmac=2b890899ac39e6ac38809cccbdd1160d155b9493d8afa43be6ac32afc2358861" />
        </div>
      </div>
    </div>
  );
};

export default LoggedOut;
