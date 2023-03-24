const express = require("express");
const router = express.Router();
const { Todo, User, SelectPet } = require("../db");
const verifyToken = require("../middleware/verifyToken");

//get all todos
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

//add a new todo
router.post("/", verifyToken, async (req, res, next) => {
  try {
    const userId = req.payload.id;
    const { dueDate, todoName, description, pointType, isCompleted } = req.body;
    const newTodo = await Todo.create({
      dueDate,
      todoName,
      description,
      pointType,
      isCompleted,
    });
    res.send(newTodo);
  } catch (err) {
    next(err);
  }
});

//get a single todo
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id, {
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
    const todo = await Todo.findByPk(req.params.id);
    res.send(await todo.update(req.body));
  } catch (err) {
    next(err);
  }
});

//delete a todo
router.delete("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    await todo.destroy();
    res.send(todo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
