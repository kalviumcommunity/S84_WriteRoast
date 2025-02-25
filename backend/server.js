require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const handwritingRoutes = require("./routes"); // Import routes

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Allows reading JSON data in requests

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully"))
.catch((error) => console.error("Database connection failed:", error.message));

// Use Routes
app.use("/api", handwritingRoutes); // All API routes will be prefixed with `/api`

// Default Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to WriteRoast API</h1>");
});

// Server Listening
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
