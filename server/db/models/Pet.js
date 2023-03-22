const Sequelize = require("sequelize");
const db = require("../db");

const Pet = db.define("pet", {
    image: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  type: {
    type: Sequelize.ENUM("plant", "monster"),
  },
  species: {
    type: Sequelize.STRING,
  },
});

module.exports = Pet;
