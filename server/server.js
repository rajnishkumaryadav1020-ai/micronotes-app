const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage (acts like a database)
let notes = [];
let nextId = 1;

// GET all notes
app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// POST a new note
app.post("/api/notes", (req, res) => {
    const { title, content } = req.body;

    const newNote = {
        id: nextId++,
        title,
        content,
        createdAt: new Date()
    };

    notes.push(newNote);

    res.status(201).json(newNote);
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});