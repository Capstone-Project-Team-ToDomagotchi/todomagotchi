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
});

module.exports = SelectPet;
