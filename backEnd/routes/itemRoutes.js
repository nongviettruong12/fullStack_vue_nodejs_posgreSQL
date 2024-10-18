const express = require("express");
const router = express.Router();
const ItemModel = require("../model/itemModel");

router.get("/items", async (req, res) => {
  const items = await ItemModel.findAll();
  res.json(items);
});
router.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  const item = await ItemModel.findByPk(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

router.post("/items", async (req, res) => {
  const { name, description } = req.body;
  const newItem = await ItemModel.create({ name, description });
  res.json(newItem);
});
router.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const item = await ItemModel.findByPk(id);

  if (item) {
    item.name = name;
    item.description = description;
    await item.save();
    res.json(item);
    console.log("Updating item with ID:", id);
  } else {
    res.status(404).send("Item not found");
  }
});

router.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  const item = await ItemModel.findByPk(id);
  if (item) {
    await item.destroy();
    res.json({ message: "Item deleted" });
  } else {
    res.status(404).send("Item not found");
  }
});
module.exports = router;
