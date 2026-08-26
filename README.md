# Real-Time Chat Application

A simple real-time chat application built with React, Vite, Tailwind CSS, Node.js, Express, and Socket.IO.

## Features

- Real-time messaging using Socket.IO
- User join notifications
- User leave notifications
- Message broadcasting to connected users
- Responsive chat interface
- Environment-based Socket.IO server URL

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Socket.IO Client

### Backend
- Node.js
- Express
- Socket.IO

## Project Structure

```text
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .env.example
│   └── package.json
│
└── backend/
    ├── server.js
    └── package.json