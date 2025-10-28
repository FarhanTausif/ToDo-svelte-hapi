import Hapi from '@hapi/hapi';
import { todoRoutes } from './routes/todoRoutes.js';
import { TodoModel } from './models/todoModel.js';

// Initialize Hapi server
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost:5173'], // SvelteKit default dev server
        headers: ['Accept', 'Content-Type'],
        additionalHeaders: ['X-Requested-With']
      }
    }
  });

  // Basic health check route
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return { message: 'Todo API Server is running!' };
    }
  });

  // API health check
  server.route({
    method: 'GET',
    path: '/api/health',
    handler: (request, h) => {
      return { 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        service: 'todo-api' 
      };
    }
  });

  // Register todo routes
  server.route(todoRoutes);

  // Seed initial data
  TodoModel.seedData();

  // Start the server
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();