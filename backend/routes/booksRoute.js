import { Book } from "../models/bookModel.js";
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, author, publishedYear } = req.body;
  try {
    if ((!title, !author, !publishedYear)) {
      return res.status(400).send({
        message: "Please fill out all fields",
      });
    }
    const newBook = {
      title,
      author,
      publishedYear,
    };
    const book = await Book.create(newBook);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const allbooks = await Book.find({});
    res.json({
      count: allbooks.length,
      data: allbooks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    if ((!title, !author, !publishedYear)) {
      return res.status(400).send({
        message: "complete all fields",
      });
    }
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(400).json({
        message: "no such book",
      });
    }
    return res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({
        message: "no such book",
      });
    }
    return res.json({ message: `Book '${book.title}' was deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
