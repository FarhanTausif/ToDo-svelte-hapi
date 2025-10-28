import Joi from '@hapi/joi';
import { TodoModel } from '../models/todoModel.js';

// Joi validation schemas
const createTodoSchema = Joi.object({
  title: Joi.string().required().min(1).max(100), // Title is required, max 100 chars
  description: Joi.string().allow('').max(500) // Description is optional, max 500 chars
});

const updateTodoSchema = Joi.object({
  title: Joi.string().min(1).max(100),
  description: Joi.string().allow('').max(500),
  completed: Joi.boolean() // Optional boolean field
}).min(1); // At least one field must be provided

const idParamSchema = Joi.object({
  id: Joi.string().uuid().required() // ID must be a valid UUID
});

export class TodoHandlers {
  // GET /api/todos - Get all todos
  static async getAllTodos(request, h) {
    try {
      const todos = TodoModel.getAll();
      return h.response(todos).code(200);
    } catch (error) {
      console.error('Error getting todos:', error);
      return h.response({ 
        error: 'Internal server error' 
      }).code(500);
    }
  }

  // GET /api/todos/{id} - Get a specific todo
  static async getTodoById(request, h) {
    try {
      const { error: validationError } = idParamSchema.validate(request.params);
      if (validationError) {
        return h.response({ 
          error: 'Invalid todo ID format' 
        }).code(400);
      }

      const { id } = request.params;
      const todo = TodoModel.getById(id);
      
      if (!todo) {
        return h.response({ 
          error: 'Todo not found' 
        }).code(404);
      }

      return h.response(todo).code(200);
    } catch (error) {
      console.error('Error getting todo:', error);
      return h.response({ 
        error: 'Internal server error' 
      }).code(500);
    }
  }

  // POST /api/todos - Create a new todo
  static async createTodo(request, h) {
    try {
      const { error: validationError, value } = createTodoSchema.validate(request.payload);
      if (validationError) {
        return h.response({ 
          error: 'Validation failed',
          details: validationError.details 
        }).code(400);
      }

      const newTodo = TodoModel.create(value);
      return h.response(newTodo).code(201);
    } catch (error) {
      console.error('Error creating todo:', error);
      return h.response({ 
        error: 'Internal server error' 
      }).code(500);
    }
  }

  // PUT /api/todos/{id} - Update a todo
  static async updateTodo(request, h) {
    try {
      // Validate ID parameter
      const { error: idError } = idParamSchema.validate(request.params);
      if (idError) {
        return h.response({ 
          error: 'Invalid todo ID format' 
        }).code(400);
      }

      // Validate request payload
      const { error: validationError, value } = updateTodoSchema.validate(request.payload);
      if (validationError) {
        return h.response({ 
          error: 'Validation failed',
          details: validationError.details 
        }).code(400);
      }

      const { id } = request.params;
      const updatedTodo = TodoModel.update(id, value);
      
      if (!updatedTodo) {
        return h.response({ 
          error: 'Todo not found' 
        }).code(404);
      }

      return h.response(updatedTodo).code(200);
    } catch (error) {
      console.error('Error updating todo:', error);
      return h.response({ 
        error: 'Internal server error' 
      }).code(500);
    }
  }

  // DELETE /api/todos/{id} - Delete a todo
  static async deleteTodo(request, h) {
    try {
      const { error: validationError } = idParamSchema.validate(request.params);
      if (validationError) {
        return h.response({ 
          error: 'Invalid todo ID format' 
        }).code(400);
      }

      const { id } = request.params;
      const deleted = TodoModel.delete(id);
      
      if (!deleted) {
        return h.response({ 
          error: 'Todo not found' 
        }).code(404);
      }

      return h.response({ 
        message: 'Todo deleted successfully' 
      }).code(200);
    } catch (error) {
      console.error('Error deleting todo:', error);
      return h.response({ 
        error: 'Internal server error' 
      }).code(500);
    }
  }
}