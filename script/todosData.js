const { faker } = require("@faker-js/faker");
const { Todo } = require("../server/db");

function createTodoArray() {
  let todoArray = [];
  for (let i = 0; i < 20; i++) {
    todoArray.push(createTodo());
  }
  return todoArray;
}

function createTodo() {
  const dueDate = faker.date.soon(14);
  const todoName = faker.lorem.word({ length: { min: 1, max: 5 } });
  const pointType = faker.helpers.arrayElement(["important", "average"], 1);
  const description = faker.lorem.text();
  const isCompleted = faker.datatype.boolean();
  const userId = faker.datatype.number({ min: 1, max: 5 });

  return {
    dueDate,
    todoName,
    pointType,
    description,
    isCompleted,
    userId,
  };
}

async function todoSeed() {
  const todoArray = createTodoArray();
  const todos = await Todo.bulkCreate(todoArray);

  return {
    todos,
  };
}

module.exports = todoSeed;
