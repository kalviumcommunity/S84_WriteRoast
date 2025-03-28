const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const handwritingRoutes = require("./routes"); // Import routes
const EntityModel = require("./Entity"); // Import Entity Model

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Allows reading JSON data in requests

// CORS configuration
const allowedOrigins = ["http://localhost:5173", "https://write-roast.netlify.app/"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Database connected successfully"))
.catch((error) => console.error("❌ Database connection failed:", error.message));

// Use Routes
app.use("/api", handwritingRoutes); // All API routes will be prefixed with `/api`

// ✅ New API Routes for Entities
app.get("/api/entities", async (req, res) => {
    try {
        const entities = await EntityModel.find();
        res.json(entities);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch entities" });
    }
});

app.post("/api/entities", async (req, res) => {
    try {
        const { name, description } = req.body;
        const newEntity = new EntityModel({ name, description });
        await newEntity.save();
        res.status(201).json(newEntity);
    } catch (error) {
        res.status(500).json({ error: "Failed to add entity" });
    }
});

// Default Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to WriteRoast API</h1>");
});

// Server Listening
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
