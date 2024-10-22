import mongoose from "mongoose";

const todoSchema =new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User", 
    required:true},
title:{
    type:"string",
    required:true
},
isCompleted:{
    type:"boolean",
    default:false}
    
},{timestamps:true})

export default mongoose.model("Todo",todoSchema)