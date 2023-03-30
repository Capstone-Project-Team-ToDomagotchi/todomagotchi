const { User } = require("../server/db");

async function userSeed() {
  const users = await Promise.all([
    User.create({
      username: "Betsy",
      password: "123",
      email: "betsy@todomagotchi.com",
      pronouns: "She/Her",
      displayName: "Betsy Carter",
      profilePic: "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/25-Most-Beautiful-Blue-Flowers.jpg"
    }),
    User.create({
      username: "Sarah",
      password: "123",
      email: "sarah@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Sarah Stephens",
      profilePic: "https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png"
    }),
    User.create({
      username: "Jing",
      password: "456",
      email: "jing@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Jing Mo",
      profilePic: "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg"
    }),
    User.create({
      username: "Zelda",
      password: "123",
      email: "zelda@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Zelda Ogiamien",
      profilePic: "https://www.petalrepublic.com/wp-content/uploads/2022/06/Roses-Rosa-spp.-1024x753.jpeg"
    }),
    User.create({
      username: "Carla",
      password: "123",
      email: "carla@todomagotchi.com",
      pronouns: "Not Disclosed",
      displayName: "Carla Herrera",
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/1200px-Dahlia_x_hybrida.jpg",
    }),
  ]);
  return { users };
}

module.exports = userSeed;
