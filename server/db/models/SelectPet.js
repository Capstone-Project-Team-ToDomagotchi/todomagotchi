const Sequelize = require("sequelize");
const db = require("../db");

const SelectPet = db.define("selectPet", {
  exp: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Pet",
  },
  age: {
    type: Sequelize.INTEGER,
  },
  selectImg: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    //instance methods
  },
  // setImg() {
  //   if (exp >= 90) {
  //     return selectImg = 2;
  //   } else if (exp >= 60) {
  //     return selectImg = 1;
  //   } else {
  //     return selectImg = 0;
  //   }
  // },
});

module.exports = SelectPet;
