const express = require("express");
const Handwriting = require("./schema"); // Importing the schema
const router = express.Router();

// **GET all handwriting entries**
router.get("/handwriting", async (req, res) => {
    try {
        const handwritings = await Handwriting.find();
        res.status(200).json(handwritings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching handwriting entries", error });
    }
});

// **POST a new handwriting entry**
router.post("/handwriting", async (req, res) => {
    try {
        const { name, description } = req.body;
        const newEntry = new Handwriting({ name, description });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: "Error saving handwriting entry", error });
    }
});

// **PUT (Update) a handwriting entry by ID**
router.put("/handwriting/:id", async (req, res) => {
    try {
        const updatedEntry = await Handwriting.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated entry
        );
        if (!updatedEntry) {
            return res.status(404).json({ message: "Handwriting entry not found" });
        }
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ message: "Error updating handwriting entry", error });
    }
});

// **DELETE a handwriting entry by ID**
router.delete("/handwriting/:id", async (req, res) => {
    try {
        const deletedEntry = await Handwriting.findByIdAndDelete(req.params.id);
        if (!deletedEntry) {
            return res.status(404).json({ message: "Handwriting entry not found" });
        }
        res.status(200).json({ message: "Handwriting entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting handwriting entry", error });
    }
});

module.exports = router;
