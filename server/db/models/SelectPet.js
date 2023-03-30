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
  createdAt: {
    type: Sequelize.DATEONLY,
  },
  selectImg: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

SelectPet.prototype.setImg = function () {
  if (this.exp >= 90) {
    this.selectImg = 2;
  }
  else if (this.exp >= 60) {
    this.selectImg = 1;
  } 
  else {
    this.selectImg = 0;
  }
  console.log("EXP updated!");
  this.save();
};

  module.exports = SelectPet;
