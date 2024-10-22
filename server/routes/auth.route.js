import express from 'express';
import {authController } from '../contollers/auth.controller.js'

const route = express.Router();
route.get('/',authController)

export {route as authRoutes};