const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;

const ToDo = db.define("todo", {
  dueDate: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
  toDoName: {
    type: Sequelize.STRING,
  },
  pointType: {
    type: Sequelize.ENUM("important", "average"),
  },
  description: {
    type: Sequelize.TEXT,
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = ToDo