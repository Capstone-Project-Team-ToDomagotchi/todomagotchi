const { faker } = require('@faker-js/faker');
const { User } = require('../server/db')

function createUserArray() {
    let userArray = [];
    userArray.push(createTestUser())
    for (let i = 1; i < 10; i ++) {
        userArray.push(createUser())
    }
    return userArray;
}
function createUser() {
    const username = faker.lorem.word({min:1, max:5});
    const password = faker.internet.password();
    const email = faker.internet.email();
    const pronouns = faker.helpers.arrayElement(['she/her', 'he/his', 'they/them'], 1);
    const displayName = faker.name.firstName();
    const image = faker.image.imageUrl();
    return {
        username, password, email, pronouns, displayName, image
    };
}

function createTestUser() {
    const username = "Sally";
    const password = "test456";
    const email = "sally123@todomagotchi.com";
    const pronouns = "she/her";
    const displayName = "sallyyyy123";

    return {
        username, password, email, pronouns, displayName
    };
}

async function userSeed() {
    const userArray = createUserArray();
    const users = await User.bulkCreate(userArray);

    return {
        users,
    };
}

module.exports = userSeed;