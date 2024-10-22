import express from "express";
import connectToDb from "./db/db.js";
import dotenv from "dotenv";
import { authRoutes } from "./routes/auth.route.js";
import cors from 'cors'
import { todoRoutes } from "./routes/todo.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use('/api/todo', todoRoutes)

app.listen(3000, () =>{
connectToDb();
    console.log(`Server started on port ${PORT}`);
})