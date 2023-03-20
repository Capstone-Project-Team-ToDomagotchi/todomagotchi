const express = require("express");
const router = express.Router();
const { ToDo } = require("../db");

//get all todos
router.get("/", async (req, res, next) => {
  try {
    const todos = await ToDo.findAll();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

//get a single todo
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await ToDo.findByPk(req.params.id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

//add a new todo
router.post("/todos", async (req, res, next) => {
  try {
    res.status(201).send(await ToDo.create(req.body));
    console.log("dispatched from adding a todo")
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
