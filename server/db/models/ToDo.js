const Sequelize = require("sequelize");
const db = require("../db");

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
    defaultValue: false,
  },
});

module.exports = ToDo;
