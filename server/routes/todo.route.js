import express from 'express';
import { todoController } from '../contollers/todo.controller.js';

const route = express.Router();


route.get("/", todoController)
export { route as todoRoutes }; 