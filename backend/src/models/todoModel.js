import { v4 as uuidv4 } from 'uuid';

// In-memory storage for todos (as specified in README)
let todos = [];

// Todo Model
export class TodoModel {
    // Get all todos
  static getAll() {
    return todos;
  }
    // Get a todo by ID
  static getById(id) {
    return todos.find(todo => todo.id === id);
  }
    // Create a new todo
  static create(todoData) {
    const newTodo = {
      id: uuidv4(),
      title: todoData.title,
      description: todoData.description || '',
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    todos.push(newTodo);
    return newTodo;
  }

    // Update a todo
  static update(id, updateData) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
      return null;
    }

    const updatedTodo = {
      ...todos[todoIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    todos[todoIndex] = updatedTodo;
    return updatedTodo;
  }

    // Delete a todo
  static delete(id) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
      return false;
    }

    todos.splice(todoIndex, 1);
    return true;
  }

  // Helper method to seed some initial data
  static seedData() {
    if (todos.length === 0) {
      this.create({
        title: 'Welcome to Todo App',
        description: 'This is your first todo item. You can edit or delete it!'
      });
      this.create({
        title: 'Learn SvelteKit',
        description: 'Explore the amazing features of SvelteKit framework'
      });
    }
  }
}