# Real-Time Chat Application — Frontend

A responsive real-time chat application frontend built with React, Vite, Tailwind CSS, and Socket.IO Client.

The frontend provides user authentication screens, real-time messaging, chat history display, user join/leave notifications, and a responsive chat interface.

## Features

### Authentication

* User registration
* User login
* JWT token-based authentication
* Protected chat interface
* Persistent login using local storage

### Real-Time Chat

* Real-time messaging using Socket.IO
* User join notifications
* User leave notifications
* Live message updates
* Chat history loaded from the backend
* Message alignment based on the current user

### Statistics

* Total registered users
* Total chat messages

### UI

* Responsive chat interface
* Message list
* Message input
* Chat header
* Login and registration forms
* Tailwind CSS styling

## Tech Stack

* React
* Vite
* Tailwind CSS
* Socket.IO Client
* JavaScript

## Project Structure

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── ChatHeader.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Message.jsx
│   │   ├── MessageList.jsx
│   │   └── MessageInput.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://chat-backend-am0i.onrender.com

VITE_SOCKET_URL=https://chat-backend-am0i.onrender.com

```



### .env.example

The repository includes a `.env.example` file:

```env
VITE_API_URL=
VITE_SOCKET_URL=
```

## Installation

Clone the frontend repository:

```bash
git clone https://github.com/coderanjan/chat-frontend.git
cd https://github.com/coderanjan/chat-frontend.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure the backend API and Socket.IO URLs.

## Start Development Server

```bash
npm run dev
```

The frontend will be available at the local Vite development URL shown in the terminal.

## Backend

This frontend communicates with a separate Node.js, Express, MongoDB, and Socket.IO backend.

The backend provides:

* User registration and login
* JWT authentication
* User management
* Chat message persistence
* Chat history
* User and message statistics
* Socket.IO real-time communication

Configure `VITE_API_URL` and `VITE_SOCKET_URL` to point to the backend server.

## Socket.IO Events

### Client → Server

* `user-join` — sends the username when joining the chat
* `message` — sends a new chat message

### Server → Client

* `message` — receives a new chat message
* `user-join` — receives a user join notification
* `user-left` — receives a user leave notification

## Chat History

When an authenticated user opens the chat, previous messages are fetched from the backend API and displayed in the message list.

This allows chat history to remain available after refreshing the page.

## Notes

* The backend server must be running for authentication, chat history, statistics, and real-time messaging to work.
* Configure the `.env` file with the correct backend URLs.
* Do not commit `.env` files containing private configuration.
* Use `.env.example` as a template.

## Author

Anjan Pajiyar
