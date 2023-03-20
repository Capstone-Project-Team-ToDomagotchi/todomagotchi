const Sequelize = require("sequelize");
const db = require("../db");

const SelectPet = db.define('selectPet', {
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
});

module.exports = SelectPet;