import express from "express";
import Contact from "../model/contactModel.js";

const router = express.Router();

// Save a new contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();
    res.status(201).json({ 
      success: true, 
      message: "Contact saved successfully!", 
      contact: newContact 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all contacts (for admin panel)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
