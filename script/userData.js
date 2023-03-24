const { faker } = require("@faker-js/faker");
const { User } = require("../server/db");

async function userSeed() {
  const users = await Promise.all([
    User.create({
      username: "Betsy",
      password: "123",
      email: "betsy@todomagotchi.com",
      pronouns: "She/Her",
      displayName: "Betsy Carter",
    }),
    User.create({
      username: "Sarah",
      password: "123",
      email: "sarah@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Sarah Stephens",
    }),
    User.create({
      username: "Jing",
      password: "456",
      email: "jing@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Jing Mo",
    }),
    User.create({
      username: "Zelda",
      password: "123",
      email: "zelda@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Zelda Ogiamien",
    }),
    User.create({
      username: "Carla",
      password: "123",
      email: "carla@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Carla Herrera",
    }),
  ]);
  return { users };
}

module.exports = userSeed;
