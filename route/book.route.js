import express from "express";
import { getBook, createBook } from "../model/controller/book.controller.js";
import Book from "../model/book.model.js"; // 👈 make sure you import the model

const router = express.Router();

// GET all books
router.get("/", getBook);

// GET only free books
router.get("/free", async (req, res) => {
  try {wd
    const books = await Book.find({ category: "free" }); // or price: 0
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching free books" });
  }
});

// GET only paid books
router.get("/paid", async (req, res) => {
  try {
    const books = await Book.find({ category: "paid" }); // or price > 0
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching paid books" });
  }
});

// POST a new book
router.post("/", createBook);

export default router;
