import express from "express";
import connectToDb from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.listen(3000, () =>{
connectToDb();
    console.log("Server started on port 3000")
})