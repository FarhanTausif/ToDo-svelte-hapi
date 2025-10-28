import { TodoHandlers } from '../handlers/todoHandlers.js';

export const todoRoutes = [
    // GET /api/todos - Get all todos
  {
    method: 'GET',
    path: '/api/todos',
    handler: TodoHandlers.getAllTodos,
    options: {
      description: 'Get all todos',
      tags: ['api', 'todos'],
      cors: {
        origin: ['http://localhost:5173'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
    // GET /api/todos/{id} - Get a specific todo
  {
    method: 'GET',
    path: '/api/todos/{id}',
    handler: TodoHandlers.getTodoById,
    options: {
      description: 'Get a todo by ID',
      tags: ['api', 'todos'],
      cors: {
        origin: ['http://localhost:5173'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
    // POST /api/todos - Create a new todo
  {
    method: 'POST',
    path: '/api/todos',
    handler: TodoHandlers.createTodo,
    options: {
      description: 'Create a new todo',
      tags: ['api', 'todos'],
      cors: {
        origin: ['http://localhost:5173'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
    // PUT /api/todos/{id} - Update a todo
  {
    method: 'PUT',
    path: '/api/todos/{id}',
    handler: TodoHandlers.updateTodo,
    options: {
      description: 'Update a todo',
      tags: ['api', 'todos'],
      cors: {
        origin: ['http://localhost:5173'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
    // DELETE /api/todos/{id} - Delete a todo
  {
    method: 'DELETE',
    path: '/api/todos/{id}',
    handler: TodoHandlers.deleteTodo,
    options: {
      description: 'Delete a todo',
      tags: ['api', 'todos'],
      cors: {
        origin: ['http://localhost:5173'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  }
];