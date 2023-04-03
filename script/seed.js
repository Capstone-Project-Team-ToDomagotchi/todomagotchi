//aggregated data that is called when server connection is initialized
"use strict";
const { db } = require("../server/db");
const petSeed = require("./petData");
const userSeed = require("./userData");
const todoSeed = require("./todosData");
const selectPetSeed = require("./selectPetData");

/**
 * seed - function seeds the database with pets/selectedPets, users, and todos
 * returns a log when executed successfully
 */
async function seed() {
  await db.sync({ force: true });
  await petSeed();
  await userSeed();
  await todoSeed();
  await selectPetSeed();
  console.log("seeding successful!");
}

module.exports = seed;

async function runSeed() {
  try {
    await seed();
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}
