"use strict";
const {db} = require('../server/db')
const petSeed = require('./petData');
const userSeed = require('./userData');
const todoSeed = require('./todosData');

async function seed() {
  await db.sync({force: true})
  await userSeed();
  await petSeed();
  await todoSeed();
  console.log('seeding successful!');
}

module.exports = seed;

async function runSeed() {
  try {
    await seed()
    console.log('Seeding success!')
  } catch (err) {
    console.error('Oh noes! Something went wrong!')
    console.error(err)
  } finally {
    db.close()
  }
}

if (require.main === module) {
  runSeed()
}