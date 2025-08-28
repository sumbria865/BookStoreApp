import Book from "../book.model.js"; // Correct file name

// Book is the model name from the model sa

// Use "async" (not "asyn") and proper parameters
// GET /book - fetch all books
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Server error while fetching books" });
  }
};

// POST /book - create a new book
export const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body); // req.body must have JSON
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ error: "Error creating book", details: err.message });
  }
};
