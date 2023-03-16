const express = require("express");
const router = express.Router();
const { ToDo } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const todos = await ToDo.findAll();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const todo = await ToDo.findByPk(req.params.id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await ToDo.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const todo = await ToDo.findByPk(req.params.id);
    res.send(await todo.update(req.body));
  } catch (err) {
    next(err);
  }
});

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
