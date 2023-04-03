//API routes for todos - mounted on /api/todos
const express = require("express");
const router = express.Router();
const { Todo, User, SelectPet } = require("../db");

//get all todos
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      order: [["updatedAt", "DESC"]],
      include: { all: true },
    });
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

//add a new todo
router.post("/addNewTodo", async (req, res) => {
  const { userId, dueDate, todoName, description, pointType } = req.body;

  try {
    const newTodo = new Todo({
      userId,
      dueDate,
      todoName,
      description,
      pointType,
      isCompleted: false,
      include: [{ model: SelectPet }, { model: User }],
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
      include: [{ model: User }],
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
    const todo = await Todo.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    const users = await todo.getUser({ include: { all: true, nested: true } });
    const selectedPet = users.selectPets?.[0];
    const updatedTodo = await todo.update({
      isCompleted: req.body.isCompleted,
    });
    const checkTodo = async (todo) => {
      if (todo.pointType === "important" && todo.isCompleted) {
        await selectedPet.increment({ exp: 20 }); 
        await selectedPet.setImg();
      }
      if (todo.pointType === "average" && todo.isCompleted) {
        await selectedPet.increment({ exp: 10 });
        await selectedPet.setImg();
      } else {
        await selectedPet;
        await selectedPet.setImg();
      }
      return selectedPet;
    };
    res.json(checkTodo(updatedTodo));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
