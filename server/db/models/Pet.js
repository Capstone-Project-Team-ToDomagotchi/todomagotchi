const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;

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
  lifePoints: {
    type: Sequelize.INTEGER,
  },
});
