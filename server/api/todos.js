//API routes for todos - mounted on /api/todos
const express = require("express");
const router = express.Router();
const { Todo, User, SelectPet } = require("../db");

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
router.post("/addNewTodo", async (req, res) => {
  const { userId, petId, dueDate, todoName, description, pointType } = req.body;

  try {
    const newTodo = new Todo({
      petId,
      userId,
      dueDate,
      todoName,
      description,
      pointType,
      isCompleted: false,
      include: [{ model: SelectPet }, { model: User }]
    });

    await newTodo.save();

    res.json(newTodo);
  } catch (error) {
    console.error(error);
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

//update a todo when toggled as "completed"
router.put("/:id/toggle", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    console.log(todo);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    const updatedTodo = await todo.update({
      isCompleted: req.body.isCompleted,
    });
    res.json(updatedTodo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
