const mongoose = require("mongoose");

const handwritingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Handwriting = mongoose.model("Handwriting", handwritingSchema);

module.exports = Handwriting;
