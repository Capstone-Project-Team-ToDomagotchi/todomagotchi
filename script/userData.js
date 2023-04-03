//demo data to seed the database, utilizing Faker api to generate values for generic users' attributes
const { User } = require("../server/db");
const { faker } = require("@faker-js/faker");

async function userSeed() {
  const users = await Promise.all([
    
    //test users
    User.create({
      username: "Betsy",
      password: "123",
      email: "betsy@todomagotchi.com",
      pronouns: "She/Her",
      displayName: "Betsy Carter",
      profilePic: "https://i.ebayimg.com/images/g/~s8AAOSwpdpVV7kR/s-l500.jpg",
    }),
    User.create({
      username: "Sarah",
      password: "123",
      email: "sarah@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Sarah Stephens",
      profilePic:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png",
    }),
    User.create({
      username: "Jing",
      password: "456",
      email: "jing@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Jing Mo",
      profilePic:
        "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg",
    }),
    User.create({
      username: "Zelda",
      password: "123",
      email: "zelda@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Zelda Ogiamien",
      profilePic:
        "https://www.petalrepublic.com/wp-content/uploads/2022/06/Roses-Rosa-spp.-1024x753.jpeg",
    }),
    User.create({
      username: "Carla",
      password: "123",
      email: "carla@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Carla Herrera",
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),

    //generic users for demo purposes
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
    User.create({
      username: faker.name.firstName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      pronouns: faker.helpers.arrayElement(
        ["he/him", "she/her", "they/them", "prefer not to say"],
        1
      ),
      displayName: faker.name.fullName(),
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
  ]);
  return { users };
}

module.exports = userSeed;
