const Sequelize = require("sequelize");
const db = require("../db");

const SelectPet = db.define('selectPet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  experience: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = SelectPet;