# ToDo App - SvelteKit + HapiJS

A full-stack Todo application built with modern web technologies following best practices.

## 🚀 Tech Stack

### Frontend
- **SvelteKit** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool

### Backend
- **HapiJS** - Rich framework for building applications and services
- **In-Memory Database** - Simple database
- **Joi** - Object schema validation
- **Node.js** - JavaScript runtime

## 📁 Project Structure

```
├── frontend/          # SvelteKit application
│   ├── src/
│   │   ├── routes/    # SvelteKit routes
│   │   ├── lib/       # Shared components and utilities
│   │   └── app.html   # App template
│   └── package.json
├── backend/           # HapiJS server
│   ├── src/
│   │   ├── routes/    # API routes
│   │   ├── handlers/  # Route handlers
│   │   ├── models/    # Data models
│   │   └── server.js  # Server configuration
│   └── package.json
└── README.md
```

## 🛠️ Explorations

- Create, read, update, delete todos
- Mark todos as complete/incomplete
- Real-time UI updates
- Responsive design
- Form validation
- Error handling
- Loading states

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ToDo-svelte-hapi
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Start the development servers:

Backend (runs on http://localhost:3000):
```bash
cd backend
npm run dev
```

Frontend (runs on http://localhost:5173):
```bash
cd frontend
npm run dev
```

## 📚 API Documentation

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/todos` | Get all todos |
| POST   | `/api/todos` | Create a new todo |
| PUT    | `/api/todos/{id}` | Update a todo |
| DELETE | `/api/todos/{id}` | Delete a todo |

### Todo Object Structure
```json
{
  "id": "unique-id",
  "title": "Todo title",
  "description": "Todo description",
  "completed": false,
  "createdAt": "2023-10-28T00:00:00.000Z",
  "updatedAt": "2023-10-28T00:00:00.000Z"
}
```
### Architecture Decisions
- **SvelteKit**: Chosen for its simplicity, performance, and excellent developer experience
- **HapiJS**: Selected for its robust plugin system, built-in validation, and enterprise-grade features
- **In-memory Storage**: Used for simplicity in development; easily replaceable with MongoDB/PostgreSQL/MySQL for production
- **TypeScript**: Ensures type safety and better developer experience
- **TailwindCSS**: Provides rapid UI development with utility classes