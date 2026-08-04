# MicroNotes App

## Overview

MicroNotes is a simple full-stack notes application built using the MERN stack technologies. It allows users to add notes and view all saved notes. The backend stores notes in memory while the server is running.

## Features

* Add a new note
* View all notes
* React frontend
* Node.js and Express backend
* REST API using GET and POST requests

## Technologies Used

* React (Vite)
* Node.js
* Express.js
* JavaScript
* HTML
* CSS

## Project Structure

```
micronotes/
├── client/
├── server/
├── warmup.js
├── README.md
└── .gitignore
```

## Installation

### Clone the repository

```bash
git clone <your-github-link>
```

### Install frontend

```bash
cd client
npm install
npm run dev
```

### Install backend

```bash
cd server
npm install
npm start
```

The backend runs on:

```
http://localhost:5000
```

The frontend runs on:

```
http://localhost:5173
```

## API Endpoints

### GET /api/notes

Returns all notes.

### POST /api/notes
add new note

## Author
Rajnish Kumar Yadav