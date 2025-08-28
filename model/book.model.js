import mongoose from "mongoose";

// define the schema here
const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
});

// create the model for the schema
const Book = mongoose.model("Book", bookSchema);

export default Book;
