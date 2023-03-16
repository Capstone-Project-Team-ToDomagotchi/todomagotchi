const { faker } = require('@faker-js/faker');
const { ToDo } = require('../server/db');

function createToDoArray() {
    let todoArray = [];
    for (let i = 0; i < 10; i++) {
        todoArray.push(createToDo());
    }
    return todoArray;
}

function createToDo() {
    const dueDate = faker.date.soon(14);
    const toDoName = faker.lorem.word({length: {min:1, max:5}});
    const pointType = faker.helpers.arrayElement(['important', 'average'], 1);
    const description = faker.lorem.text();
    const isCompleted = faker.datatype.boolean();

    return {
      dueDate, toDoName, pointType, description, isCompleted  
    };
}

async function todoSeed() {
    const todoArray = createToDoArray();
    const todos = await ToDo.bulkCreate(todoArray);

    return {
        todos
    }
}

module.exports = todoSeed;