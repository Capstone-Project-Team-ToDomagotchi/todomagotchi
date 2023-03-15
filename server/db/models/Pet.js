const Sequelize = require("sequelize");
const db = require("../db");

const Pet = db.define("pet", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM("plant", "monster"),
  },
  species: {
    type: Sequelize.STRING,
  },
  experience: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Pet;