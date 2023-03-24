const { faker } = require("@faker-js/faker");
const { User } = require("../server/db");

// function createUserArray() {
//   let userArray = [];
//   userArray.push(createTestUser());
//   for (let i = 1; i < 10; i++) {
//     userArray.push(createUser());
//   }
//   return userArray;
// }
// function createUser() {
//   const username = faker.lorem.word({ min: 1, max: 5 });
//   const password = faker.internet.password();
//   const email = faker.internet.email();
//   const pronouns = faker.helpers.arrayElement(
//     ["she/her", "he/his", "they/them"],
//     1
//   );
//   const displayName = faker.name.firstName();
//   const image = faker.image.imageUrl();
//   console.log({ username, password, email, pronouns, displayName, image });
//   return {
//     username,
//     password,
//     email,
//     pronouns,
//     displayName,
//     image,
//   };
// }

// function createTestUser() {
//   const username = "Jin";
//   const password = "456";
//   const email = "sally123@todomagotchi.com";
//   const pronouns = "she/her";
//   const displayName = "jin123";

//   return {
//     username,
//     password,
//     email,
//     pronouns,
//     displayName,
//   };
// }

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

// async function userSeed() {
//   const userArray = createUserArray();
//   const users = await User.bulkCreate(userArray);

//   return {
//     users,
//   };
// }

module.exports = userSeed;
