const express = require("express");
const router = express.Router();
const { ToDo, User, SelectPet } = require("../db");

//get all todos
router.get("/", async (req, res, next) => {
  try {
    const todos = await ToDo.findAll();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

//add a new todo
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body, "req.body")
    const {dueDate, toDoName, description, pointType, isCompleted} = req.body;
    const newTodo = await ToDo.create({dueDate, toDoName, description, pointType, isCompleted})
    res.send(newTodo);
    console.log("dispatched")
  } catch (err) {
    next(err);
  }
});

//get a single todo
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await ToDo.findByPk(req.params.id, {
      include: [{ model: SelectPet }, { model: User }],
    });
    res.json(todo);
  } catch (err) {
    next(err);
  }
});


//update or edit a todo
router.put("/:id", async (req, res, next) => {
  try {
    const todo = await ToDo.findByPk(req.params.id);
    res.send(await todo.update(req.body));
  } catch (err) {
    next(err);
  }
});

//delete a todo
router.delete("/:id", async (req, res, next) => {
  try {
    const todo = await ToDo.findByPk(req.params.id);
    await todo.destroy();
    res.send(todo);
  } catch (err) {
    next(err);
  }
});

module.exports = router; 
