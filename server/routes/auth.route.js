import express from 'express';
import {authController, registerController } from '../contollers/auth.controller.js'

const route = express.Router();
route.get('/',authController)
route.post("/register",registerController)

export {route as authRoutes};